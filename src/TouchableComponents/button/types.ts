import type { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  textColor?: string;
  disabledTextColor?: string;
}