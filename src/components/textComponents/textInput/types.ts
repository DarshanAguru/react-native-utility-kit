import type { KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle } from "react-native";
import type { ThemePreset } from "../../../themes";


export type customStyleProps = Partial<ThemePreset>;

export type customStyleType = customStyleProps;
export type dirType = "rtl"|"ltr";

export interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string,
  secureTextEntry?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  style?: object;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
  keyboarType?: KeyboardTypeOptions;
  customStyles?: customStyleProps;
  dir?:"rtl"|"ltr";
  autoTheming?:boolean;
}
