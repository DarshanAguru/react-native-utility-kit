# CardCarousel Component

The **CardCarousel** component is a reusable and customizable carousel for React Native applications. It supports images or custom content, autoplay, looping, controlled/uncontrolled index, RTL, custom indicators, and an imperative API.

---

## ✨ Features
- ✅ Works with images or custom card content
- ✅ Autoplay with configurable interval and direction
- ✅ Looping and pause-on-touch
- ✅ Controlled or uncontrolled active index
- ✅ RTL support
- ✅ Customizable indicators (built-in dots or your own renderer)
- ✅ Imperative API: next, prev, scrollToIndex, startAutoplay, stopAutoplay, getActiveIndex

---

## 📦 Installation
Optional for optimized image rendering:

```bash
npm install react-native-fast-image
```

---

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | **Required** | Array of items to render (images or any data). |
| `renderItem` | `(args: { item: T; index: number; width: number; height: number; active: boolean }) => ReactElement \| null` | `undefined` | Custom renderer for items. Provide when not using `imageExtractor`. |
| `imageExtractor` | `(item: T) => ImageSourcePropType \| string` | `undefined` | Extracts image source/URI for built-in image rendering. |
| `imageComponent` | `ImageComponentType` | `Image` | Image component to use (e.g., `FastImage`). |
| `keyExtractor` | `(item: T, index: number) => string` | `index as string` | Key extractor for stable list rendering. |
| `height` | `number` | `210` | Fixed height of the carousel (px). |
| `aspectRatio` | `number` | `undefined` | Width/height ratio (e.g., `16/9`). Computes height from container width. |
| `containerStyle` | `ViewStyle` | `undefined` | Style for the carousel container. |
| `contentContainerStyle` | `ViewStyle` | `undefined` | Style for the FlatList content container. |
| `itemStyle` | `ViewStyle` | `undefined` | Style for each item wrapper. |
| `pagingEnabled` | `boolean` | `true` | Enables page-by-page snapping. |
| `snapAlignment` | `'center' \| 'start'` | `'center'` | Alignment for snap behavior. |
| `showsScrollIndicator` | `boolean` | `false` | Shows the horizontal scroll indicator. |
| `initialIndex` | `number` | `0` | Initial active slide index. |
| `activeIndex` | `number` | `undefined` | Controlled active index (use with `onIndexChange`). |
| `onIndexChange` | `(index: number) => void` | `undefined` | Callback when active index changes. |
| `autoplay` | `boolean` | `false` | Enables automatic slide advancing. |
| `autoplayInterval` | `number` | `5000` | Interval (ms) for autoplay. |
| `loop` | `boolean` | `true` | Loops to start/end when reaching boundaries. |
| `playDirection` | `'forward' \| 'backward' \| 'alternate'` | `'forward'` | Direction strategy for autoplay. |
| `disableAutoplayOnTouch` | `boolean` | `true` | Pauses autoplay while user interacts. |
| `rtl` | `boolean` | `I18nManager.isRTL` | Inverts list for right-to-left layouts. |
| `showIndicators` | `boolean` | `true` | Toggles built-in dot indicators. |
| `renderIndicator` | `({ count: number; activeIndex: number }) => ReactElement \| null` | `undefined` | Custom indicator renderer. |
| `dotProps` | `{ size?: number; color?: string; activeColor?: string; spacing?: number; shape?: 'circle' \| 'square'; style?: ViewStyle }` | `{}` | Styling for built-in dot indicators. |
| `accessibilityLabel` | `string` | `undefined` | Accessibility label for the carousel. |
| `accessibilityHint` | `string` | `undefined` | Accessibility hint for the carousel. |
| `testID` | `string` | `undefined` | Test identifier for E2E/unit tests. |
| `onItemPress` | `(item: T, index: number) => void` | `undefined` | Tap handler for items (works with built-in image mode). |

---

## ✅ Usage Example

```jsx
import React from 'react';
import { View } from 'react-native';
import { Carousel } from './Carousel';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  require('./localImage.png'),
];

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <Carousel
        data={images}
        imageExtractor={(uri) => uri}
        containerStyle={{width: "90%"}}
        imageComponent={Image}
        autoplay
        autoplayInterval={3000}
        disableAutoplayOnTouch={false}
        loop
        aspectRatio={16 / 9}
        dotProps={{ size: 10, activeColor: '#5A67D8' }}
      />
    </View>
  );
}
```
