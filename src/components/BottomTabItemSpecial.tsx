import React from 'react';
import { Icon, Circle, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  iconSize: number;
  iconName: string;
  iconColor: string;
  bgColor: string;
  bgSize: number;
  routeDestination: string;
  style?: StyleProp<ViewStyle>;
}

const BottomTabItemSpecial: React.FC<Props> = ({
  iconSize,
  iconName,
  iconColor,
  bgColor,
  bgSize,
  routeDestination,
  style
}) => {
  const iconSizePx = iconSize.toString() + 'px';
  const bgSizePx = bgSize.toString() + 'px';
  const navigation = useNavigation();

  return (
    <Pressable position="absolute" bottom="35%" onPress={() => navigation.navigate(routeDestination)} style={style}>
      <Circle size={bgSizePx} bgColor={bgColor} shadow={2}>
        <Icon as={Ionicons} name={iconName} color={iconColor} size={iconSizePx} />
      </Circle>
    </Pressable>
  );
};

export default BottomTabItemSpecial;
