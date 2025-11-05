import type { KeyboardTypeOptions, StyleProp, TextStyle, ViewStyle } from "react-native";


export interface customStyleProps {
  primaryColor?: string;
  secondaryColor?: string;
  borderColor?: string;
  fontFamily?: string;
  fontFamilyLabel?: string;
}

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
}
