import React from "react";
import { ms } from "react-native-size-matters";
import type { LabelProps } from "./types";
import { Text } from "react-native";


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
}) => {

  if (autoScaling)  {
    fontSize = ms(fontSize);
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