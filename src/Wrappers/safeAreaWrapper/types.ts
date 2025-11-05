import React from "react";
import type { StyleProp, ViewStyle } from "react-native";

export interface SafeAreaWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}