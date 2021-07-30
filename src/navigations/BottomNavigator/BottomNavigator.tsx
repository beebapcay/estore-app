import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeNavigator from '../HomeNavigator/HomeNavigator';
import MotivationNavigator from '../MotivationNavigator/MotivationNavigator';
import FavouritesNavigator from '../FavouritesNavigator/FavouritesNavigator';
import ProfileNavigator from '../ProfileNavigator/AccountNavigator';
import Routes from '../routes';
import { BottomParamsList } from './types';
import { BottomTabItemNormal, BottomTabItemSpecial } from '../../components';
import { useToken } from 'native-base';
import CartNavigator from '../CartNavigator/CartNavigator';

const Tab = createBottomTabNavigator<BottomParamsList>();

const BottomNavigator = () => {
  const [brand, gray] = useToken('colors', ['brand', 'gray']);

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          // position: 'absolute',
          // bottom: 15,
          // marginHorizontal: 20,
          height: 55,
          // borderRadius: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          borderTopWidth: 0,
          paddingHorizontal: 20,
          elevation: 0,
          shadowOffset: { width: 0, height: 0 }
        },
        inactiveTintColor: gray['500'],
        activeTintColor: brand['800'],
        keyboardHidesTabBar: true
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          let type = 'normal';

          switch (route.name) {
            case Routes.HOME:
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case Routes.MOTIVATION:
              iconName = focused ? 'flash' : 'flash-outline';
              break;
            case Routes.CART:
              type = 'special';
              iconName = 'cart';
              break;
            case Routes.FAVOURITES:
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case Routes.PROFILE:
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          if (type === 'special')
            return (
              <BottomTabItemSpecial
                bgSize={60}
                iconName={iconName}
                iconSize={size}
                iconColor="white"
                bgColor="black"
                routeDestination={route.name}
              />
            );
          return (
            <BottomTabItemNormal iconSize={size} iconColor={color} iconName={iconName} routeDestination={route.name} />
          );
        }
      })}
    >
      <Tab.Screen name={Routes.HOME} component={HomeNavigator} />
      <Tab.Screen name={Routes.MOTIVATION} component={MotivationNavigator} />
      <Tab.Screen name={Routes.CART} component={CartNavigator} />
      <Tab.Screen name={Routes.FAVOURITES} component={FavouritesNavigator} />
      <Tab.Screen name={Routes.PROFILE} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
