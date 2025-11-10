import React from "react";
import {
  View,
  TextInput,
  Text,
} from "react-native";
import { gettextInputStyles} from "./textInput.styles";
import type { TextInputProps } from "./types";
import { ThemedColorPreset } from "../../../themes";
import { useColorScheme } from "react-native";


/**
 * Input
 *
 * A theme-aware, flexible text input component with optional label,
 * left/right accessory slots, and error messaging. Styles are generated
 * via `gettextInputStyles` using either the provided `customStyles` or
 * the auto-selected theme (`LightTheme` / `DarkTheme`) when `autoTheming` is enabled.
 *
 * @component
 * @param {TextInputProps} props - Props for the Input component
 * @param {string} [props.label] - Label displayed above the input
 * @param {string} [props.value] - Controlled value of the input
 * @param {(text: string) => void} [props.onChangeText] - Callback when the text changes
 * @param {string} [props.placeholder=""] - Placeholder text
 * @param {string} [props.placeholderTextColor="#aaa"] - Color of the placeholder text
 * @param {boolean} [props.secureTextEntry=false] - Enables secure text entry (password fields)
 * @param {React.ReactNode} [props.leftContent] - Optional element rendered to the left (e.g., icon)
 * @param {React.ReactNode} [props.rightContent] - Optional element rendered to the right (e.g., clear button)
 * @param {StyleProp<ViewStyle>} [props.style] - Additional style for the TextInput
 * @param {StyleProp<TextStyle>} [props.labelStyle] - Additional style for the label
 * @param {StyleProp<TextStyle>} [props.inputStyle] - Additional style for the input text
 * @param {StyleProp<ViewStyle>} [props.containerStyle] - Additional style for the outer container
 * @param {string} [props.errorMessage] - Error text shown below the input
 * @param {TextInput["props"]["keyboardType"]} [props.keyboarType="default"] - Keyboard type (e.g., "email-address")
 * @param {ThemePreset} [props.customStyles] - Optional theme token object consumed by `gettextInputStyles`
 * @param {"ltr" | "rtl"} [props.dir="ltr"] - Layout direction for RTL/LTR
 * @param {boolean} [props.autoTheming=false] - If true and no `customStyles` provided, applies Dark/Light based on `useColorScheme`
 *
 * @example
 * <Input
 *   label="Email"
 *   value={email}
 *   onChangeText={setEmail}
 *   placeholder="you@example.com"
 *   rightContent={<ClearButton onPress={() => setEmail('')} />}
 *   errorMessage={isInvalid ? "Please enter a valid email" : undefined}
 *   customStyles={ThemedColorPreset.LightTheme}
 *   dir="ltr"
 * />
 *
 * @example
 * // Auto-theming (no customStyles passed)
 * <Input
 *   label="Password"
 *   secureTextEntry
 *   value={password}
 *   onChangeText={setPassword}
 *   autoTheming
 * />
 *
 * @remarks
 * - If `customStyles` is provided, it takes precedence and `autoTheming` is ignored.
 * - When `autoTheming` is true and `customStyles` is missing, the component uses
 *   `useColorScheme()` to choose between `ThemedColorPreset.DarkTheme` and `.LightTheme`.
 * - `dir` is passed to `gettextInputStyles` to adjust paddings/margins for RTL/LTR layouts.
 *
 * @returns {JSX.Element} A styled input field with optional label, accessories, and error text.
 */
const Input: React.FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder = "",
  placeholderTextColor="#aaa",
  secureTextEntry = false,
  leftContent,
  rightContent,
  style,
  labelStyle,
  inputStyle,
  containerStyle,
  errorMessage, 
  keyboarType = "default",
  customStyles,
  dir = 'ltr',
  autoTheming=false,
}) => {
  let styles = undefined;
  if(customStyles)
  {
    styles = gettextInputStyles(customStyles,dir);
  }
  else{
  if(autoTheming)
  {
    const theme = useColorScheme();
    if(theme === "dark")
    {
      customStyles = ThemedColorPreset.DarkTheme;
    }
    else{
      customStyles = ThemedColorPreset.LightTheme;
    }
  }else{
      customStyles = ThemedColorPreset.LightTheme;
  }

  styles = gettextInputStyles(customStyles, dir);
}

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftContent && <View style={styles.leftContent}>{leftContent}</View>}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          style={[
            styles.textInput,
            inputStyle,
            leftContent && styles.inputWithLeftContent,
            rightContent && styles.inputWithRightContent,
            style,
          ]}
          keyboardType={keyboarType}
        />
        {rightContent && (
          <View style={styles.rightContent}>{rightContent}</View>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};


export { Input };
