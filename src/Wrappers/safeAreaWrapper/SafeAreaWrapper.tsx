import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import type { SafeAreaWrapperProps } from './types';



const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}, style]}>
      {children}
    </SafeAreaView>
  );
};

export {SafeAreaWrapper};
