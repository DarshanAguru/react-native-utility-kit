import type { StyleProp, TextStyle } from "react-native";


export type fontWeightType = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | "ultralight" | "thin" | "light" | "medium" | "regular" | "semibold" | "condensedBold" | "condensed" | "heavy" | "black";

export type LabelProps = {
  title: string;
  fontSize?:number;
  fontWeight?: fontWeightType;
  fontFamily?: string;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  autoScaling?: boolean;
  autoTheming?: boolean;
};
