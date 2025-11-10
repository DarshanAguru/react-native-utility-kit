# Button Component

The **Button** component is a customizable and reusable button for React Native applications. It supports styling, disabled states, and text customization for building consistent and interactive UI elements.

---

## ✨ Features
- ✅ Customizable background and text colors
- ✅ Supports disabled state with separate styles
- ✅ Adjustable text styles and container styles
- ✅ Responsive design using `react-native-size-matters`

---

## 📦 Installation
Ensure you have React Native set up. Install `react-native-size-matters` for responsive scaling:

```bash
npm install react-native-size-matters
```

## 🔧 Props

| Prop                     | Type         | Default          | Description                                      |
|--------------------------|-------------|-----------------|--------------------------------------------------|
| `title`                 | `string`    | **Required**    | Text displayed on the button                    |
| `onPress`               | `function`  | `() => {}`      | Callback when button is pressed                 |
| `disabled`              | `boolean`   | `false`         | Disables the button when true                   |
| `style`                 | `object`    | `undefined`     | Additional styles for the button container      |
| `textStyle`             | `object`    | `undefined`     | Additional styles for the button text           |
| `backgroundColor`       | `string`    | `#6200EE`       | Background color of the button                  |
| `disabledBackgroundColor`| `string`   | `#d3d3d3`       | Background color when button is disabled        |
| `textColor`             | `string`    | `#ffffff`       | Text color                                      |
| `disabledTextColor`     | `string`    | `#a1a1a1`       | Text color when button is disabled              |


## ✅ Usage Example
```jsx
import React from "react";
import { View } from "react-native";
import { Button } from "./Button";

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Click Me"
        onPress={() => alert("Button Pressed!")}
        backgroundColor="#4CAF50"
        textColor="#fff"
        style={{ marginVertical: 10 }}
      />
      <Button
        title="Disabled"
        disabled={true}
      />
    </View>
  );
};

export default App;
```