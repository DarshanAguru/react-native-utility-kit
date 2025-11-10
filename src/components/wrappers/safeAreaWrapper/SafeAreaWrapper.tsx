import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type { SafeAreaWrapperProps } from './types';



/**
 * SafeAreaWrapper
 *
 * A utility component that wraps its children inside a `SafeAreaView`,
 * ensuring that content is rendered within the safe boundaries of the device screen.
 * 
 * @component
 * @param {SafeAreaWrapperProps} props - Props for SafeAreaWrapper
 * @param {React.ReactNode} props.children - The content to render inside the safe area
 * @param {StyleProp<ViewStyle>} [props.style] - Optional style to apply to the SafeAreaView
 *
 * @example
 * <SafeAreaWrapper style={{ backgroundColor: '#f5f5f5' }}>
 *   <HomeScreen />
 * </SafeAreaWrapper>
 *
 * @returns {JSX.Element} A SafeAreaView wrapping the provided children
 */

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}, style]}>
      {children}
    </SafeAreaView>
  );
};

export {SafeAreaWrapper};
