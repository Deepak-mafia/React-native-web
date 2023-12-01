import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createBox} from '@shopify/restyle';
import {theme} from '../theme';

const Box = createBox(theme);

const CustomTouchable = ({children, onPress, customStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={customStyle}>
      {/* <Box
       style={[{backgroundColor: 'blue', padding: 10}, customStyle]}> */}
      {children}
      {/* </Box> */}
    </TouchableOpacity>
  );
};

export default CustomTouchable;
