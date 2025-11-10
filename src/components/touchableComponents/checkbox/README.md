# Checkbox Component

The **Checkbox** component is a customizable and reusable checkbox for React Native applications. It supports labels, clickable areas, and dynamic styling for building consistent and interactive UI elements.

---

## ✨ Features
- ✅ Customizable checkbox color and size
- ✅ Supports clickable labels
- ✅ Easy integration with dynamic state handling
- ✅ Built using `react-native-vector-icons` for icons

---

## 📦 Installation
Ensure you have React Native set up. Install `@react-native-vector-icons/ionicons` for icons:

```bash
npm install @react-native-vector-icons/ionicons
```

## 🔧 Props

| Prop               | Type         | Default       | Description                                      |
|--------------------|-------------|--------------|--------------------------------------------------|
| `value`           | `boolean`   | **Required** | Current state of the checkbox (checked/unchecked)|
| `onValueChange`   | `function`  | **Required** | Callback when checkbox value changes            |
| `isLabelClickable`| `boolean`   | `true`       | Makes the label clickable                       |
| `children`        | `ReactNode` | `undefined`  | Label content displayed next to the checkbox    |
| `checkboxColor`   | `string`    | `#000000`    | Color of the checkbox icon                      |
| `checkboxSize`    | `number`    | `24`         | Size of the checkbox icon                       |

## ✅ Usage Example

```jsx
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Checkbox } from "./Checkbox";

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Checkbox
        value={checked}
        onValueChange={setChecked}
        checkboxColor="#4CAF50"
        checkboxSize={28}
      >
        <Text>Accept Terms & Conditions</Text>
      </Checkbox>
    </View>
  );
};
```