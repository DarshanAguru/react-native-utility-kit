import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from "react-native";
import { ms } from "react-native-size-matters";
import type { ButtonProps } from "./types";

/**
 * Button
 *
 * A customizable, theme-aware button component for React Native apps.
 * Designed to be flexible and reusable across your UI, with support for
 * dynamic styling, disabled states, and responsive sizing via `react-native-size-matters`.
 *
 * @component
 * @param {ButtonProps} props - Props for the Button component
 * @param {string} props.title - The text to display inside the button
 * @param {() => void} [props.onPress] - Callback function triggered when the button is pressed
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {StyleProp<ViewStyle>} [props.style] - Optional style override for the button container
 * @param {StyleProp<TextStyle>} [props.textStyle] - Optional style override for the button text
 * @param {string} [props.backgroundColor="#6200EE"] - Background color for the enabled state
 * @param {string} [props.disabledBackgroundColor="#d3d3d3"] - Background color for the disabled state
 * @param {string} [props.textColor="#ffffff"] - Text color for the enabled state
 * @param {string} [props.disabledTextColor="#a1a1a1"] - Text color for the disabled state
 *
 * @example
 * <Button
 *   title="Submit"
 *   onPress={() => handleSubmit()}
 *   disabled={isLoading}
 *   backgroundColor="#007AFF"
 *   textColor="#fff"
 * />
 *
 * @returns {JSX.Element} A styled button with press and disabled behavior
 */
export const Button: React.FC<ButtonProps> = ({
  title,
  onPress = () => {},
  disabled = false,
  style,
  textStyle,
  backgroundColor = "#6200EE",
  disabledBackgroundColor = "#d3d3d3",
  textColor = "#ffffff",
  disabledTextColor = "#a1a1a1",
}) => {
  const containerStyles: StyleProp<ViewStyle>[] = [
    styles.button,
    { backgroundColor: disabled ? disabledBackgroundColor : backgroundColor },
    style,
  ];

  const titleStyles: StyleProp<TextStyle>[] = [
    styles.buttonTitle,
    { color: disabled ? disabledTextColor : textColor },
    textStyle,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={containerStyles}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <Text style={titleStyles}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: ms(12),
    borderRadius: ms(12),
    alignItems: "center",
    justifyContent: "center",
    minHeight: ms(48),
    width: "100%",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: ms(16),
    fontWeight: "600",
  },
});

export default Button;

