import type Ionicons from "@react-native-vector-icons/ionicons";
import type { ViewStyle } from "react-native";

export type DropDownRef = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: () => boolean;
};

export type DropDownProps = {
  /** Basic header API (simple mode) */
  title?: string;
  description?: string;

  /** Description options */
  descriptionLines?: number;
  expandedDescription?: boolean;

  /** Custom renderers (advanced mode) */
  renderHeader?: (args: { expanded: boolean }) => React.ReactNode;
  renderContent?: (args: { expanded: boolean }) => React.ReactNode;

  /** Children for simple mode content */
  children?: React.ReactNode;

  /** Behavior & state */
  defaultExpanded?: boolean;
  expanded?: boolean; // controlled
  onToggle?: (next: boolean) => void;
  disabled?: boolean;

  /** Layout */
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;

  /** Display mode */
  overlay?: boolean; // shows content in a modal overlay
  closeOnBackdropPress?: boolean;
  overlayBackdropColor?: string;
  overlayCardStyle?: ViewStyle;

  /** Overlay sizing/positioning */
  overlayWidth?: number | string; // e.g. '100%' or px
  overlayMaxHeight?: number; // limits scroll height
  overlayOffset?: { top?: number; left?: number; right?: number };

  /** Icons */
  iconName?: string; // e.g. 'chevron-down' / 'chevron-up'
  iconNameExpanded?: string; // icon when open
  iconColor?: string;
  iconSize?: number;
  iconPack?: typeof Ionicons; // allow other icon packs
  renderIcon?: (expanded: boolean) => React.ReactNode;

  /** Accessibility & test */
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
};