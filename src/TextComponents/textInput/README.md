# Input Component

The **Input** component is a customizable text input field for React Native applications. It supports labels, placeholders, error messages, and additional content on the left and right sides of the input.

---

## ✨ Features
- ✅ Customizable label, placeholder, and error message
- ✅ Supports left and right content (icons, buttons, etc.)
- ✅ Secure text entry for password fields
- ✅ RTL and LTR layout support
- ✅ Easy styling with custom themes

---

## 📦 Installation
Ensure you have React Native set up. No extra dependencies are required for basic usage.

---

## 🔧 Props

| Prop                   | Type         | Default        | Description                                      |
|------------------------|-------------|---------------|--------------------------------------------------|
| `label`               | `string`    | `undefined`   | Label text displayed above the input            |
| `value`               | `string`    | **Required**  | Current value of the input                      |
| `onChangeText`        | `function`  | **Required**  | Callback when text changes                      |
| `placeholder`         | `string`    | `""`          | Placeholder text                                 |
| `placeholderTextColor`| `string`    | `#aaa`        | Color of the placeholder text                   |
| `secureTextEntry`     | `boolean`   | `false`       | Hides text for password input                   |
| `leftContent`         | `ReactNode` | `undefined`   | Element displayed on the left side of input     |
| `rightContent`        | `ReactNode` | `undefined`   | Element displayed on the right side of input    |
| `style`               | `object`    | `undefined`   | Additional styles for the TextInput             |
| `labelStyle`          | `object`    | `undefined`   | Styles for the label text                       |
| `inputStyle`          | `object`    | `undefined`   | Styles for the input field                      |
| `containerStyle`      | `object`    | `undefined`   | Styles for the container                        |
| `errorMessage`        | `string`    | `undefined`   | Error message displayed below the input         |
| `keyboarType`         | `string`    | `default`     | Keyboard type (e.g., `numeric`, `email-address`)|
| `customStyles`        | `object`    | `defaultTheme`| Custom theme styles                             |
| `dir`                 | `string`    | `ltr`         | Layout direction (`ltr` or `rtl`)              |

---

## ✅ Usage Example

```jsx
import React from "react";
import { View } from "react-native";
import { Input } from "./Input";

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <Input
        label="Username"
        value=""
        onChangeText={(text) => console.log(text)}
        placeholder="Enter your username"
        errorMessage="Username is required"
        leftContent={<Icon name="user" size={20} />}
        rightContent={<Icon name="check" size={20} />}
      />
    </View>
  );
};

export default App;
```