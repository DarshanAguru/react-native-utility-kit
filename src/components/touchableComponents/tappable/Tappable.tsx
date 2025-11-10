import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import type { TappableProps } from './types';

/**
 * 👆 Tappable
 *
 * A lightweight wrapper around `TouchableOpacity` that makes any child content tappable.
 * Useful for creating interactive UI elements without styling overhead.
 *
 * @component
 * @param {TappableProps} props - Props for the Tappable component
 * @param {() => void} props.onTap - Callback function triggered when the component is tapped
 * @param {React.ReactNode} props.children - Content to render inside the tappable area
 * @param {StyleProp<ViewStyle>} [props.style] - Optional style override for the container
 *
 * @example
 * <Tappable onTap={() => console.log("Tapped!")}>
 *   <Text>Click Me</Text>
 * </Tappable>
 *
 * @returns {JSX.Element} A tappable container wrapping the provided children
 */
const Tappable: React.FC<TappableProps> = ({onTap, children, style}) => {
  return (
    <TouchableOpacity onPress={onTap} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '100%',
  },
});

export {Tappable};
