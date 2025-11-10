import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import {Ionicons} from '@react-native-vector-icons/ionicons';
import type { CheckboxProps } from "./types";


const iconsName = {
    checked: {
      circle: 'checkmark-circle-outline',
      circleFilled: 'checkmark-circle',
      square: 'checkbox-outline',
      squareFilled: 'checkbox',
      shield: 'shield-checkmark-outline',
      shieldFilled: 'shield-checkmark',
      tick: 'checkmark-sharp'
    },
     unchecked: {
      circle: 'ellipse-outline',
      circleFilled:'checkmark-circle-outline',
      square: 'square-outline',
      squareFilled: 'checkbox-outline',
      shield: 'shield-outline',
      shieldFilled:'shield-checkmark-outline',
      tick: 'close-sharp',
     }
  } as const;

/**
 * Checkbox
 *
 * A flexible and customizable checkbox component built with `Ionicons`.
 * Supports multiple icon styles (square, circle, shield, tick) and allows
 * both the checkbox and label to be interactive.
 *
 * @component
 * @param {CheckboxProps} props - Props for the Checkbox component
 * @param {boolean} props.value - Current checked state
 * @param {(newValue: boolean) => void} props.onValueChange - Callback when checkbox is toggled
 * @param {boolean} [props.isLabelClickable=true] - Whether the label is also clickable
 * @param {React.ReactNode} props.children - Label or content to display next to the checkbox
 * @param {string} [props.checkboxColor="#000000"] - Color of the checkbox icon
 * @param {number} [props.checkboxSize=24] - Size of the checkbox icon
 * @param {'square' | 'circle' | 'shield' | 'tick'} [props.iconName='square'] - Style of checkbox icon
 *
 * @example
 * <Checkbox
 *   value={isSelected}
 *   onValueChange={setIsSelected}
 *   iconName="shield"
 *   checkboxColor="#6200EE"
 * >
 *   <Text>Accept Terms</Text>
 * </Checkbox>
 *
 * @returns {JSX.Element} A styled checkbox with optional label interaction
 */
const Checkbox: React.FC<CheckboxProps> = ({
  value,
  onValueChange,
  isLabelClickable = true,
  children,
  checkboxColor="#000000",
  checkboxSize = 24,
  iconName='square',
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
           name={value ? iconsName.checked[iconName] : iconsName.unchecked[iconName]}
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
