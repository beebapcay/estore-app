import React from 'react';
import { Center, Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  iconSize: number;
  iconName: string;
  iconColor: string;
}

const BottomTabItemNormal = ({ iconSize, iconName, iconColor }: Props) => {
  const iconSizePx = iconSize.toString() + 'px';

  return (
    <Center>
      <Icon as={Ionicons} name={iconName} size={iconSizePx} color={iconColor} />
    </Center>
  );
};

export default BottomTabItemNormal;
