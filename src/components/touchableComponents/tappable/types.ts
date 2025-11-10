import type { ReactNode } from "react";
import type { ViewStyle } from "react-native";


export interface TappableProps {
  onTap: () => void;
  children: ReactNode;
  style?: ViewStyle;
}