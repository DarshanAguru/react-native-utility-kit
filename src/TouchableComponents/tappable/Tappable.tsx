import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import type { TappableProps } from './types';



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
