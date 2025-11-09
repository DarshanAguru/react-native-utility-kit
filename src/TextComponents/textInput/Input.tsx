import React from "react";
import {
  View,
  TextInput,
  Text,
} from "react-native";
import { gettextInputStyles} from "./textInput.styles";
import type { TextInputProps } from "./types";
import { ThemedColorPreset } from "../../themes";

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
  customStyles = ThemedColorPreset.LightTheme,
  dir = 'ltr',
}) => {
  const styles = gettextInputStyles(customStyles,dir);
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
