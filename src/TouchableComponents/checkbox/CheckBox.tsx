import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {Ionicons} from '@react-native-vector-icons/ionicons';
import type { CheckboxProps } from "./types";


const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onValueChange,
  isLabelClickable = true,
  children,
  checkboxColor="#000000",
  checkboxSize = 24,
}) => {
  const handlePress = () => {
    onValueChange(!value);
  };

  const handleLabelPress = () => {
    if (isLabelClickable) {
      onValueChange(!value);
    }
  };

  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
           name={value ? "checkbox-outline" : "square-outline"}
           color={checkboxColor}
           size={checkboxSize}
          style={styles.checkboxImage}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLabelPress} disabled={!isLabelClickable}>
        <View style={styles.labelContainer}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxImage: {
    marginRight: 10,
  },
  labelContainer: {
    justifyContent: "center",
  },
});

export { Checkbox };
