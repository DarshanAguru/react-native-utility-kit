import type { Image, ImageSourcePropType, ViewStyle } from "react-native";

export type ImageComponentType = typeof Image;

export type CarouselRef = {
  scrollToIndex: (index: number, animated?: boolean) => void;
  next: () => void;
  prev: () => void;
  startAutoplay: () => void;
  stopAutoplay: () => void;
  getActiveIndex: () => number;
};

export type DotProps = {
  size?: number;
  color?: string;
  activeColor?: string;
  spacing?: number;
  shape?: 'circle' | 'square';
  style?: ViewStyle;
};

export type IndicatorRenderArgs = {
  count: number;
  activeIndex: number;
};

export type PlayDirection = 'forward' | 'backward' | 'alternate';

export type CarouselProps<T = any> = {
  /** Data of any format */
  data: T[];

  /** If you don’t provide `renderItem`, the carousel tries to render images via `imageExtractor` */
  imageExtractor?: (item: T) => ImageSourcePropType | string;

  /** Custom renderer if your items aren’t images */
  renderItem?: (args: {
    item: T;
    index: number;
    width: number;
    height: number;
    active: boolean;
  }) => React.ReactElement | null;

  /** Use FastImage or custom image component if needed */
  imageComponent?: ImageComponentType;

  /** Key extractor for stable rendering */
  keyExtractor?: (item: T, index: number) => string;

  /** Layout sizing */
  height?: number; // explicit height (px)
  aspectRatio?: number; // width / height, e.g., 16/9
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  itemStyle?: ViewStyle;

  /** Paging & snapping */
  pagingEnabled?: boolean;
  snapAlignment?: 'center' | 'start';
  showsScrollIndicator?: boolean;

  /** Indexing */
  initialIndex?: number;
  activeIndex?: number; // controlled
  onIndexChange?: (index: number) => void;

  /** Autoplay */
  autoplay?: boolean;
  autoplayInterval?: number; // ms
  loop?: boolean;
  playDirection?: PlayDirection;
  disableAutoplayOnTouch?: boolean;

  /** Direction / RTL */
  rtl?: boolean;

  /** Indicator */
  showIndicators?: boolean;
  renderIndicator?: (args: IndicatorRenderArgs) => React.ReactElement | null;
  dotProps?: DotProps;

  /** Accessibility */
  accessibilityLabel?: string;
  accessibilityHint?: string;

  /** Testing */
  testID?: string;

  /** Item interaction */
  onItemPress?: (item: T, index: number) => void;
};
