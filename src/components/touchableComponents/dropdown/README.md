# DropDown Component

The **DropDown** component is a flexible and reusable dropdown/expansion component for React Native applications. It supports inline or overlay display, controlled/uncontrolled state, custom header/content rendering, icon customization, accessibility, and an imperative API.

---

## ✨ Features
- ✅ Inline or overlay dropdown modes
- ✅ Controlled and uncontrolled state handling
- ✅ Customizable header and content renderers
- ✅ Backdrop with outside-tap-to-close for overlay mode
- ✅ Icon customization or custom icon renderer
- ✅ Imperative API: open, close, toggle, isOpen

---

## 📦 Installation
Ensure you have React Native set up. For icons, install `@react-native-vector-icons/ionicons` and `react-native-size-matters`:

```bash
npm install @react-native-vector-icons/ionicons react-native-size-matters
```

---

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Title text displayed in the header (simple mode). |
| `description` | `string` | `undefined` | Optional description displayed below the title. |
| `renderHeader` | `(args: { expanded: boolean }) => ReactNode` | `undefined` | Custom header renderer (overrides title/description). |
| `renderContent` | `(args: { expanded: boolean }) => ReactNode` | `undefined` | Custom content renderer (overrides children). |
| `children` | `ReactNode` | `undefined` | Content displayed when expanded (simple mode). |
| `defaultExpanded` | `boolean` | `false` | Initial expanded state (uncontrolled mode). |
| `expanded` | `boolean` | `undefined` | Controlled expanded state. |
| `onToggle` | `(next: boolean) => void` | `undefined` | Callback when dropdown is toggled. |
| `disabled` | `boolean` | `false` | Disables interaction. |
| `containerStyle` | `ViewStyle` | `undefined` | Style for the outer container. |
| `headerStyle` | `ViewStyle` | `undefined` | Style for the header container. |
| `contentStyle` | `ViewStyle` | `undefined` | Style for the inline content container. |
| `overlay` | `boolean` | `false` | Whether to show content in a modal overlay. |
| `closeOnBackdropPress` | `boolean` | `true` | Close overlay when backdrop is pressed. |
| `overlayBackdropColor` | `string` | `'rgba(0,0,0,0.35)'` | Backdrop color for overlay mode. |
| `overlayCardStyle` | `ViewStyle` | `undefined` | Style for the overlay card container. |
| `overlayWidth` | `number | string` | `'100%'` | Width of the overlay card. |
| `overlayMaxHeight` | `number` | `undefined` | Max height for overlay content (enables scrolling). |
| `overlayOffset` | `{ top?: number; left?: number; right?: number }` | `undefined` | Position offsets for overlay card. |
| `iconName` | `string` | `'chevron-down'` | Icon name for collapsed state. |
| `iconNameExpanded` | `string` | `'chevron-up'` | Icon name for expanded state. |
| `iconColor` | `string` | `'#4C5BD4'` | Color of the icon. |
| `iconSize` | `number` | `22` | Size of the icon. |
| `iconPack` | `IconComponent` | `Ionicons` | Icon component to use (e.g., Ionicons). |
| `renderIcon` | `(expanded: boolean) => ReactNode` | `undefined` | Custom icon renderer. |
| `accessibilityLabel` | `string` | `undefined` | Accessibility label for the dropdown. |
| `accessibilityHint` | `string` | `undefined` | Accessibility hint for the dropdown. |
| `testID` | `string` | `undefined` | Test identifier for E2E/unit tests. |

---

## ✅ Usage Example

```jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DropDown } from './DropDown';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <DropDown
        title="Country"
        description="Please select your native country from the given options to change the content preferences based on your choice."
        closeOnBackdropPress
      >
        <TouchableOpacity style={{padding : 2}} onPress={()=>console.log("India")}><Text style={{fontWeight: '400', fontSize: 16}}>India</Text></TouchableOpacity>
        <TouchableOpacity style={{padding : 2}} onPress={()=>console.log("Others")}><Text style={{fontWeight: '400', fontSize: 16}}>Others</Text></TouchableOpacity>
      </DropDown>
    </View>
  );
}
```
