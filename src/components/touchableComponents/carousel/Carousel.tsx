
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type LayoutChangeEvent,
  Image,
  I18nManager,
} from 'react-native';
import type {
  ImageSourcePropType,
  ListRenderItemInfo,
} from 'react-native';
import type { CarouselProps, CarouselRef, PlayDirection } from './types';
import { DEFAULTS } from './constants';



function resolveImageSource(src: ImageSourcePropType | string): ImageSourcePropType {
  if (typeof src === 'string') return { uri: src };
  return src;
}


/**
 * CardCarousel
 *
 * A flexible and reusable carousel component for React Native that supports
 * dynamic sizing, auto-scrolling, and customizable image rendering.
 * Built using `ScrollView` and `FastImage` for optimized performance.
 *
 * @component
 * @param {CardCarouselProps} props - Props for the CardCarousel component
 * 
 * @description
 * - Automatically adjusts to container width and device orientation
 * - Supports auto-scroll with configurable interval
 * - Displays pagination dots for active slide indication
 * - Uses `FastImage` for efficient image loading and caching
 *
 * @example
 * <CardCarousel
 *   images={[
 *     'https://example.com/image1.jpg',
 *     'https://example.com/image2.jpg',
 *     require('./localImage.png'),
 *   ]}
 * />
 *
 * @returns {JSX.Element} A responsive image carousel with pagination indicators
 */
export const Carousel = forwardRef<CarouselRef, CarouselProps<any>>(function Carousel<T>(
  props: CarouselProps<T>,
  ref: any
) {
  const {
    data,
    imageExtractor,
    renderItem,
    imageComponent: ImageComp = Image,
    keyExtractor,
    containerStyle = {width: "100%"},
    contentContainerStyle,
    itemStyle,
    height,
    aspectRatio,
    pagingEnabled = true,
    snapAlignment = 'center',
    showsScrollIndicator = false,
    initialIndex = 0,
    activeIndex: controlledIndex,
    onIndexChange,
    autoplay = false,
    autoplayInterval = DEFAULTS.autoplayInterval,
    loop = true,
    playDirection = 'forward',
    disableAutoplayOnTouch = true,
    rtl = I18nManager.isRTL,
    showIndicators = true,
    renderIndicator,
    dotProps,
    accessibilityLabel,
    accessibilityHint,
    testID,
    onItemPress,
  } = props;

  const [containerWidth, setContainerWidth] = useState(0);
  const [internalIndex, setInternalIndex] = useState(initialIndex);
  const isControlled = typeof controlledIndex === 'number';
  const activeIndex = isControlled ? controlledIndex! : internalIndex;

  const listRef = useRef<FlatList<T>>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userTouchedRef = useRef(false);
  const directionRef = useRef<PlayDirection>(playDirection);

  const itemWidth = containerWidth || 0;
  const itemHeight = useMemo(() => {
    if (height) return height;
    if (aspectRatio && containerWidth) return Math.round(containerWidth / aspectRatio);
    return DEFAULTS.height;
  }, [height, aspectRatio, containerWidth]);

  const total = data.length;

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: itemWidth,
      offset: itemWidth * index,
      index,
    }),
    [itemWidth]
  );

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    setContainerWidth(width);
    // Ensure initial scroll position after width is known
    requestAnimationFrame(() => {
      if (listRef.current && total > 0) {
        listRef.current.scrollToOffset({
          offset: (isControlled ? controlledIndex ?? initialIndex : internalIndex) * width,
          animated: false,
        });
      }
    });
  };

  const updateIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      if (isControlled) {
        onIndexChange?.(clamped);
      } else {
        setInternalIndex(clamped);
        onIndexChange?.(clamped);
      }
    },
    [isControlled, onIndexChange, total]
  );

  const viewabilityConfig = useMemo(
    () => ({
      itemVisiblePercentThreshold: 80,
    }),
    []
  );

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any[] }) => {
      if (!viewableItems?.length) return;
      // Pick the first fully visible item as active
      const vi = viewableItems.find((v) => v.isViewable);
      if (typeof vi?.index === 'number') {
        updateIndex(vi.index);
      }
    }
  );

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / itemWidth);
    updateIndex(index);
  };

  const scrollToIndex = useCallback(
    (index: number, animated = true) => {
      if (!listRef.current || itemWidth === 0) return;
      const clamped = Math.max(0, Math.min(index, total - 1));
      listRef.current.scrollToOffset({
        offset: clamped * itemWidth,
        animated,
      });
    },
    [itemWidth, total]
  );

  const next = useCallback(() => {
    if (total === 0) return;
    if (activeIndex === total - 1) {
      if (loop) scrollToIndex(0);
    } else {
      scrollToIndex(activeIndex + 1);
    }
  }, [activeIndex, loop, scrollToIndex, total]);

  const prev = useCallback(() => {
    if (total === 0) return;
    if (activeIndex === 0) {
      if (loop) scrollToIndex(total - 1);
    } else {
      scrollToIndex(activeIndex - 1);
    }
  }, [activeIndex, loop, scrollToIndex, total]);


  
const activeIndexRef = useRef(activeIndex);
useEffect(() => {
  activeIndexRef.current = activeIndex;
}, [activeIndex])

const internalDirRef = useRef<any>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current || !autoplay || total <= 1) return;
    autoplayRef.current = setInterval(() => {
      if (disableAutoplayOnTouch && userTouchedRef.current) return;


      const idx = activeIndexRef.current;

      switch (directionRef.current) {
        case 'forward':
          if (idx >= total - 1) {
            if (loop) scrollToIndex(0);
          } else {
            scrollToIndex(idx + 1);
          }
          break;

        case 'backward':
          if (idx <= 0) {
            if (loop) scrollToIndex(total - 1);
          } else {
            scrollToIndex(idx - 1);
          }
          break;

        case 'alternate':
          // Bounce between ends
          if (idx === total - 1) {
            internalDirRef.current = "backward";
            scrollToIndex(idx - 1);
          } else if (idx === 0) {
            internalDirRef.current = "forward";
            scrollToIndex(idx + 1);
          } else {
            const step = internalDirRef.current === "forward" ? 1: -1;
            scrollToIndex(idx + step);
          }
          break;
      }
    }, autoplayInterval);
  }, [
    activeIndex,
    autoplay,
    autoplayInterval,
    disableAutoplayOnTouch,
    loop,
    scrollToIndex,
    total,
  ]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayInterval, total, loop, playDirection, itemWidth]);

  // Pause autoplay on user touch
  const onScrollBeginDrag = () => {
    userTouchedRef.current = true;
    if (disableAutoplayOnTouch) stopAutoplay();
  };

  const onScrollEndDrag = () => {
    userTouchedRef.current = false;
    if (autoplay && disableAutoplayOnTouch) startAutoplay();
  };

  useImperativeHandle(ref, () => ({
    scrollToIndex,
    next,
    prev,
    startAutoplay,
    stopAutoplay,
    getActiveIndex: () => activeIndex,
  }));

  const defaultKeyExtractor = (item: T, index: number) =>
    String((keyExtractor?.(item, index) ?? index));

  const renderDefaultItem = useCallback(
    ({ item, index }: ListRenderItemInfo<T>) => {
      const src = imageExtractor?.(item);
      if (!src) {
        // If no imageExtractor provided and no custom renderer, render nothing.
        if (!renderItem) return null;
      }

      if (renderItem) {
        return renderItem({
          item,
          index,
          width: itemWidth,
          height: itemHeight,
          active: index === activeIndex,
        });
      }

      // Built-in simple image item
      const source = resolveImageSource(src!);
      return (
        <View style={[styles.imageWrapper, { width: itemWidth, height: itemHeight }, itemStyle]}>
          <ImageComp
            source={source}
            style={styles.image}
            resizeMode="stretch"
            // @ts-ignore - some image components support onError/onLoad
            onError={() => {}}
            // @ts-ignore
            onLoad={() => {}}
          />
          {/* Optional tap handler */}
          {onItemPress && (
            <View
              style={styles.touchOverlay}
              onStartShouldSetResponder={() => true}
              onResponderRelease={() => onItemPress?.(item, index)}
            />
          )}
        </View>
      );
    },
    [
      imageExtractor,
      renderItem,
      itemWidth,
      itemHeight,
      activeIndex,
      itemStyle,
      ImageComp,
      onItemPress,
    ]
  );

  // Indicators
  const renderDots = () => {
    if (!showIndicators || total <= 1) return null;
    if (renderIndicator) {
      return renderIndicator({ count: total, activeIndex });
    }

    const {
      size = 8,
      color = '#C8D1E6',
      activeColor = DEFAULTS.themeColor,
      spacing = 6,
      shape = 'circle',
      style: dotStyle,
    } = dotProps || {};

    return (
      <View style={styles.dotsContainer} pointerEvents="none">
        {data.map((_, i) => (
          <View
            key={`dot-${i}`}
            style={[
              {
                width: size,
                height: size,
                marginHorizontal: spacing / 2,
                borderRadius: shape === 'circle' ? size / 2 : 2,
                backgroundColor: i === activeIndex ? activeColor : color,
                opacity: i === activeIndex ? 1 : 0.5,
              },
              dotStyle,
            ]}
            testID={`${testID ?? 'carousel'}-dot-${i}`}
          />
        ))}
      </View>
    );
  };

  // Initial empty state
  if (total === 0) {
    return (
      <View
        style={[
          styles.container,
          { height: itemHeight },
          containerStyle,
        ]}
        onLayout={handleLayout}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        testID={testID}
      />
    );
  }

  return (
    <View
      style={[
        styles.container,
        { height: itemHeight },
        containerStyle,
      ]}
      onLayout={handleLayout}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
    >
      {containerWidth > 0 && (
        <>
          <FlatList
            ref={listRef}
            data={data}
            keyExtractor={defaultKeyExtractor}
            horizontal
            pagingEnabled={pagingEnabled}
            showsHorizontalScrollIndicator={showsScrollIndicator}
            contentContainerStyle={contentContainerStyle}
            renderItem={renderDefaultItem}
            initialScrollIndex={initialIndex}
            getItemLayout={getItemLayout}
            onMomentumScrollEnd={handleScrollEnd}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            snapToAlignment={snapAlignment}
            snapToInterval={itemWidth}
            decelerationRate="fast"
            removeClippedSubviews
            windowSize={3}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={50}
            viewabilityConfig={viewabilityConfig}
            onViewableItemsChanged={onViewableItemsChanged.current}
            inverted={rtl}
          />
          {renderDots()}
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 5,
    overflow: 'hidden',
    paddingVertical: 2,
    paddingHorizontal: 0,
    elevation: 2,
  },
  imageWrapper: {
    // item receives explicit width/height
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touchOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});
