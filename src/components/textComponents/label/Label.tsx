import React from "react";
import { ms } from "react-native-size-matters";
import type { LabelProps } from "./types";
import { Text, useColorScheme } from "react-native";

/**
 * Label
 *
 * A lightweight, customizable text component for React Native with optional
 * **auto-scaling** (via `react-native-size-matters`) and **auto-theming**
 * (using `useColorScheme`).
 *
 * @component
 * @param {LabelProps} props - Props for the Label component
 * @param {string} props.title - The text to render
 * @param {number} [props.fontSize=18] - Base font size (scaled if `autoScaling` is true)
 * @param {string} [props.fontFamily] - Font family to use (e.g., "System", "Roboto")
 * @param {TextStyle['fontWeight']} [props.fontWeight] - Font weight (e.g., "400", "600", "bold")
 * @param {string} [props.color="#000000"] - Text color (overridden if `autoTheming` and system is dark)
 * @param {"left" | "right" | "center" | "auto" | "justify"} [props.textAlign="left"] - Text alignment
 * @param {number} [props.numberOfLines] - Maximum number of lines to render (truncates with ellipsis)
 * @param {StyleProp<TextStyle>} [props.style] - Optional style override for the Text element
 * @param {() => void} [props.onPress] - Optional press handler
 * @param {boolean} [props.autoScaling=true] - If true, scales `fontSize` using `ms()`
 * @param {boolean} [props.autoTheming=false] - If true, uses `useColorScheme()` to set white text on dark mode
 *
 * @example
 * <Label title="Welcome" />
 *
 * @example
 * <Label
 *   title="Tap me"
 *   onPress={() => console.log('Pressed')}
 *   fontSize={16}
 *   fontWeight="600"
 *   color="#333"
 * />
 *
 * @example
 * // Auto-scaling + Auto-theming
 * <Label
 *   title="Theme-aware label"
 *   autoScaling
 *   autoTheming
 * />
 *
 * @remarks
 * - `autoScaling`: Uses `ms(fontSize)` from `react-native-size-matters` for responsive typography.
 * - `autoTheming`: If enabled and system theme is "dark", forces `color` to `#ffffff`.
 *   If you need more robust theming (background-aware colors), consider using your ThemeProvider.
 *
 * @returns {JSX.Element} A styled Text element.
 */
const Label: React.FC<LabelProps> = ({
  title,
  fontSize = 18 ,
  fontFamily, 
  fontWeight,
  color = "#000000",
  textAlign = "left",
  numberOfLines,
  style,
  onPress,
  autoScaling = true,
  autoTheming=false,
}) => {

  if (autoScaling)  {
    fontSize = ms(fontSize);
  }

  if(autoTheming)
  {
    const theme = useColorScheme();
    if(theme ==="dark")
    {
      color="#ffffff";
    }
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          color,
          textAlign,
        },
        style,
      ]}
      onPress={onPress}
    >
      {title}
    </Text>
  );
};

export { Label };