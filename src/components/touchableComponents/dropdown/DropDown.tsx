
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  Text,
  I18nManager,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { ms, ScaledSheet } from 'react-native-size-matters';
import type { DropDownProps, DropDownRef } from './types';
import { COLORS, commonStyles } from './constants';


/**
 * DropDown
 *
 * A flexible and reusable dropdown/expansion component for React Native that supports
 * inline or overlay display, controlled/uncontrolled state, and customizable header/content.
 * Built using `TouchableOpacity` and `Modal` for reliable interaction and stacking.
 *
 * @component
 * @param {DropDownProps} props - Props for the DropDown component
 *
 * @description
 * - Supports inline expansion or modal overlay with backdrop
 * - Provides controlled and uncontrolled state handling
 * - Allows custom header and content rendering
 * - Includes accessibility roles and states for better UX
 *
 * @example
 * <DropDown
 *   title="Payment Details"
 *   description="Tap to view"
 *   overlay
 *   closeOnBackdropPress
 * >
 *   <Text>UPI: darshan@bank</Text>
 *   <Text>Card: **** **** 1234</Text>
 * </DropDown>
 *
 * @returns {JSX.Element} A dropdown component with expandable content and optional overlay mode
 */
export const DropDown = forwardRef<DropDownRef, DropDownProps>(function DropDown(
  props,
  ref: any
) {
  const {
    title,
    description,
    descriptionLines=2,
    expandedDescription=true,
    renderHeader,
    renderContent,
    children,
    defaultExpanded = false,
    expanded: controlledExpanded,
    onToggle,
    disabled = false,
    containerStyle,
    headerStyle,
    contentStyle,
    overlay = false,
    closeOnBackdropPress = true,
    overlayBackdropColor = COLORS.backdrop,
    overlayCardStyle,
    overlayWidth = '100%',
    overlayMaxHeight,
    overlayOffset,
    iconName = 'chevron-down',
    iconNameExpanded = 'chevron-up',
    iconColor = COLORS.primary,
    iconSize = ms(22),
    iconPack = Ionicons,
    renderIcon,
    accessibilityLabel,
    accessibilityHint,
    testID,
  } = props;

  const [internalExpanded, setInternalExpanded] = useState<boolean>(defaultExpanded);
  const isControlled = typeof controlledExpanded === 'boolean';
  const expanded = isControlled ? controlledExpanded! : internalExpanded;

  const IconComp = iconPack;

  const setExpanded = useCallback(
    (next: boolean) => {
      if (disabled) return;
      if (isControlled) {
        onToggle?.(next);
      } else {
        setInternalExpanded(next);
        onToggle?.(next);
      }
    },
    [disabled, isControlled, onToggle]
  );

  const toggle = useCallback(() => setExpanded(!expanded), [expanded, setExpanded]);
  const open = useCallback(() => setExpanded(true), [setExpanded]);
  const close = useCallback(() => setExpanded(false), [setExpanded]);

  useImperativeHandle(ref, () => ({
    open,
    close,
    toggle,
    isOpen: () => expanded,
  }));

  const headerNode = useMemo(() => {
    if (renderHeader) return renderHeader({ expanded });
    return (
      <View style={styles.headerTextContainer}>
        {!!title && (
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        )}
        {!!description && (
          <Text style={styles.subtitle} numberOfLines={(expanded && expandedDescription)? undefined : descriptionLines}>
            {description}
          </Text>
        )}
      </View>
    );
  }, [renderHeader, title, description, expanded]);

  const contentNode = useMemo(() => {
    if (renderContent) return renderContent({ expanded });
    return <View style={[styles.content, contentStyle]}>{children}</View>;
  }, [renderContent, children, contentStyle, expanded]);

  const iconNode = useMemo(() => {
    if (renderIcon) return renderIcon(expanded);
    const name:any = expanded ? iconNameExpanded : iconName;
    return <IconComp name={name} color={iconColor} size={iconSize} />;
  }, [renderIcon, expanded, IconComp, iconName, iconNameExpanded, iconColor, iconSize]);

  return (
    <View
      style={[styles.container, containerStyle]}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
    >
      {/* Header */}
      <TouchableOpacity
        onPress={toggle}
        style={[styles.header, headerStyle, disabled && styles.headerDisabled]}
        activeOpacity={disabled ? 1 : 0.8}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ expanded, disabled }}
      >
        {headerNode}
        {iconNode}
      </TouchableOpacity>

      {/* Inline content (default) */}
      {!overlay && expanded && contentNode}

      {/* Overlay content via Modal */}
      {overlay && (
        <Modal
          visible={expanded}
          transparent
          animationType="fade"
          onRequestClose={close}
        >
          <Pressable
            style={[styles.backdrop, { backgroundColor: overlayBackdropColor }]}
            onPress={closeOnBackdropPress ? close : undefined}
          >
            <View
              pointerEvents="box-none"
              style={[
                styles.overlayContainer,
                {
                  width: overlayWidth,
                  top: overlayOffset?.top ?? ms(56),
                  left: overlayOffset?.left,
                  right: overlayOffset?.right,
                },
              ]}
            >
              <View style={[styles.overlayCard, overlayCardStyle]}>
                {overlayMaxHeight ? (
                  <ScrollView
                    style={{ maxHeight: overlayMaxHeight }}
                    contentContainerStyle={{ paddingBottom: ms(8) }}
                    keyboardShouldPersistTaps="handled"
                  >
                    {contentNode}
                  </ScrollView>
                ) : (
                  contentNode
                )}
              </View>
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
});

const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.background,
    borderRadius: ms(10),
    padding: ms(12),
    marginVertical: ms(8),
    position: 'relative',
    ...commonStyles.cardShadow,
  },
  header: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: ms(40),
  },
  headerDisabled: {
    opacity: 0.5,
  },
  headerTextContainer: {
    flex: 1,
    paddingRight: ms(8),
  },
  title: {
    fontSize: ms(16),
    fontWeight: '700',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: ms(2),
    fontSize: ms(13),
    color: COLORS.subtitle,
  },
  content: {
    marginTop: ms(8),
  },
  backdrop: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: I18nManager.isRTL ? 'flex-end' : 'flex-start',
  },
  overlayContainer: {
    position: 'absolute',
    zIndex: 999,
    elevation: ms(12),
    paddingHorizontal: ms(12),
    width: '100%',
  },
  overlayCard: {
    backgroundColor: COLORS.background,
    borderRadius: ms(12),
    padding: ms(12),
    width: '100%',
    ...commonStyles.cardShadow,
  },
});
