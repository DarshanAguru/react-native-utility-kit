# SafeAreaWrapper Component

The **SafeAreaWrapper** is a utility component that ensures your content respects the safe areas of modern devices (like notches and rounded corners). It helps maintain a clean and consistent layout across different screen types.

---

## ✨ Features
- ✅ Automatically applies safe area insets
- ✅ Customizable background and styles
- ✅ Simple and lightweight wrapper for any content
- ✅ Uses `react-native-safe-area-context` for reliable safe area handling

---

## 📦 Installation
Ensure you have the following dependency installed:

```bash
npm install react-native-safe-area-context
```

## 🔧 Props
| Prop       | Type         | Default       | Description                                      |
|-----------|-------------|--------------|--------------------------------------------------|
| `children`| `ReactNode` | **Required** | Content to render inside the safe area wrapper  |
| `style`   | `object`    | `undefined`  | Additional styles for the SafeAreaView          |


## ✅ Usage Example
```jsx
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaWrapper } from "./SafeAreaWrapper";

const App = () => {
  return (
    <SafeAreaWrapper style={{ backgroundColor: "#f8f8f8" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18 }}>Hello, Safe Area!</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default App;
```