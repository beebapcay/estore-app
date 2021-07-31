import React from 'react';
import { Icon, Circle, Pressable, Badge } from 'native-base';
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
  badgeNumber?: number;
  style?: StyleProp<ViewStyle>;
}

const BottomTabItemSpecial: React.FC<Props> = ({
  iconSize,
  iconName,
  iconColor,
  bgColor,
  bgSize,
  routeDestination,
  badgeNumber,
  style
}) => {
  const iconSizePx = iconSize.toString() + 'px';
  const bgSizePx = bgSize.toString() + 'px';
  const navigation = useNavigation();

  return (
    <Pressable position="absolute" bottom="35%" onPress={() => navigation.navigate(routeDestination)} style={style}>
      <Circle size={bgSizePx} bgColor={bgColor} shadow={2}>
        <Icon as={Ionicons} name={iconName} color={iconColor} size={iconSizePx} />
        {badgeNumber ? (
          <Badge
            colorScheme="dark"
            bgColor="brand.800"
            borderRadius={999}
            position="absolute"
            top="15%"
            right="7.5px"
            paddingY="0.5px"
            justifyContent="center"
            alignItems="center"
            paddingX="5px"
          >
            {badgeNumber.toString()}
          </Badge>
        ) : undefined}
      </Circle>
    </Pressable>
  );
};

export default BottomTabItemSpecial;
