import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeNavigator from '../HomeNavigator/HomeNavigator';
import TrendNavigator from '../TrendNavigator/TrendNavigator';
import LovedNavigator from '../LovedNavigator/LovedNavigator';
import AccountNavigator from '../AccountNavigator/AccountNavigator';
import Routes from '../routes';
import { MainParamsList } from './types';
import { BottomTabItemNormal, BottomTabItemSpecial } from '../../components';
import { useToken } from 'native-base';
import CartNavigator from '../CartNavigator/CartNavigator';

const Tab = createBottomTabNavigator<MainParamsList>();

const MainNavigator = () => {
  const [inactiveTab, activeTab] = useToken('colors', ['inactiveTab', 'activeTab']);

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 15,
          marginHorizontal: 20,
          height: 55,
          borderRadius: 10,
          borderTopWidth: 0,
          paddingHorizontal: 20,
          elevation: 0,
          shadowOffset: { width: 0, height: 0 }
        },
        inactiveTintColor: inactiveTab,
        activeTintColor: activeTab
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          let type = 'normal';

          switch (route.name) {
            case Routes.HOME:
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case Routes.TREND:
              iconName = focused ? 'flash' : 'flash-outline';
              break;
            case Routes.CART:
              type = 'special';
              iconName = 'cart';
              break;
            case Routes.LOVED:
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case Routes.ACCOUNT:
              iconName = focused ? 'person' : 'person-outline';
              break;
          }

          if (type === 'special')
            return (
              <BottomTabItemSpecial bgSize={55} iconName={iconName} iconSize={size} iconColor="white" bgColor="black" />
            );
          return <BottomTabItemNormal iconSize={size} iconColor={color} iconName={iconName} />;
        }
      })}
    >
      <Tab.Screen name={Routes.HOME} component={HomeNavigator} />
      <Tab.Screen name={Routes.TREND} component={TrendNavigator} />
      <Tab.Screen name={Routes.CART} component={CartNavigator} />
      <Tab.Screen name={Routes.LOVED} component={LovedNavigator} />
      <Tab.Screen name={Routes.ACCOUNT} component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
