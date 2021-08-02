import Routes from '../routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomParamsList } from '../BottomNavigator/types';
import { RouteProp } from '@react-navigation/native';

export type MainParamList = {
  [Routes.BOTTOM]: NavigatorScreenParams<BottomParamsList>;
  [Routes.PRODUCT]: { productId: string };
};

export type ProductScreenRouteProp = RouteProp<MainParamList, Routes.PRODUCT>;
