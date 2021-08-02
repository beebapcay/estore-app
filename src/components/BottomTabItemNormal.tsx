import React from 'react';
import { Center, Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  iconSize: number;
  iconName: string;
  iconColor: string;
  routeDestination: string;
  style?: StyleProp<ViewStyle>;
}

const BottomTabItemNormal: React.FC<Props> = ({ iconSize, iconName, iconColor, routeDestination, style }) => {
  const iconSizePx = iconSize.toString() + 'px';
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(routeDestination)} style={style}>
      <Center>
        <Icon as={Ionicons} name={iconName} size={iconSizePx} color={iconColor} />
      </Center>
    </Pressable>
  );
};

export default BottomTabItemNormal;
