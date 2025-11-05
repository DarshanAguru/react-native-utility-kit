# Label Component

The **Label** component is a reusable text component for React Native applications. It provides customizable text rendering with support for auto-scaling, styling, and event handling.

---

## ✨ Features
- ✅ Customizable font size, color, weight, and alignment
- ✅ Auto-scaling text using `react-native-size-matters`
- ✅ Supports `onPress` for interactive labels
- ✅ Easy to integrate and style

---

## 📦 Installation
Make sure you have `react-native-size-matters` installed:

```bash
npm install react-native-size-matters
```

## 🔧 Props

| Prop            | Type       | Default     | Description                                      |
|-----------------|-----------|------------|--------------------------------------------------|
| `title`         | `string`  | **Required** | Text to display inside the label                |
| `fontSize`      | `number`  | `18`       | Font size of the text                           |
| `fontFamily`    | `string`  | `undefined`| Custom font family                              |
| `fontWeight`    | `string`  | `undefined`| Font weight (e.g., `bold`, `normal`)           |
| `color`         | `string`  | `#000000`  | Text color                                      |
| `textAlign`     | `string`  | `left`     | Text alignment (`left`, `center`, `right`)     |
| `numberOfLines` | `number`  | `undefined`| Limits the number of lines                     |
| `style`         | `object`  | `undefined`| Additional styles                               |
| `onPress`       | `function`| `undefined`| Callback when text is pressed                  |
| `autoScaling`   | `boolean` | `true`     | Enables auto-scaling using `ms()`              |


## Usage Example
```jsx
import React from "react";
import { View } from "react-native";
import { Label } from "./Label";

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Label
        title="Hello, React Native!"
        fontSize={20}
        color="#4CAF50"
        fontWeight="bold"
        textAlign="center"
        onPress={() => alert("Label Pressed!")}
      />
    </View>
  );
};

export default App;
```

## 💡 Notes
* If autoScaling is enabled, the font size will scale based on screen size using react-native-size-matters.
* Combine style prop with default styles for advanced customization.