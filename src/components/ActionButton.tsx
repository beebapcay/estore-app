import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Box } from 'native-base';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ActionButton: React.FC<Props> = ({ style }) => {
  return <Box style={style}></Box>;
};

export default ActionButton;
