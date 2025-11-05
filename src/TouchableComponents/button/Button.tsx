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

