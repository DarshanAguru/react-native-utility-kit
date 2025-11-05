# Tappable Component

The **Tappable** component is a lightweight and reusable wrapper for creating tappable areas in React Native. It simplifies handling tap gestures and allows you to wrap any content inside a touchable container.

---

## ✨ Features
- ✅ Simple and lightweight
- ✅ Wrap any content to make it tappable
- ✅ Customizable styles
- ✅ Uses `TouchableOpacity` for smooth tap feedback

---

## 📦 Installation
No additional dependencies required beyond React Native.

---

## 🔧 Props

| Prop       | Type         | Default       | Description                                      |
|-----------|-------------|--------------|--------------------------------------------------|
| `onTap`   | `function`  | **Required** | Callback when the component is tapped           |
| `children`| `ReactNode` | **Required** | Content to render inside the tappable area      |
| `style`   | `object`    | `undefined`  | Additional styles for the tappable container    |

---

## ✅ Usage Example

```jsx
import React from "react";
import { View, Text } from "react-native";
import { Tappable } from "./Tappable";

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Tappable onTap={() => alert("Tapped!")}>
        <Text style={{ fontSize: 18, color: "#6200EE" }}>Tap Me</Text>
      </Tappable>
    </View>
  );
};

export default App;