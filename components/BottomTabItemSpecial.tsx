import React from 'react';
import { Icon, Circle, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  iconSize: number;
  iconName: string;
  iconColor: string;
  bgColor: string;
  bgSize: number;
}

const BottomTabItemSpecial = ({ iconSize, iconName, iconColor, bgColor, bgSize }: Props) => {
  const iconSizePx = iconSize.toString() + 'px';
  const bgSizePx = bgSize.toString() + 'px';

  return (
    <Pressable position="absolute" bottom="50%">
      <Circle size={bgSizePx} bgColor={bgColor} shadow={5}>
        <Icon as={Ionicons} name={iconName} color={iconColor} size={iconSizePx} />
      </Circle>
    </Pressable>
  );
};

export default BottomTabItemSpecial;
