import React from 'react';
import { Center, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  iconSize: number;
  iconName: string;
  iconColor: string;
}

const BottomTabItemNormal: React.FC<Props> = ({ iconSize, iconName, iconColor }) => {
  const iconSizePx = iconSize.toString() + 'px';

  return (
    <Center>
      <Icon as={Ionicons} name={iconName} size={iconSizePx} color={iconColor} />
    </Center>
  );
};

export default BottomTabItemNormal;
