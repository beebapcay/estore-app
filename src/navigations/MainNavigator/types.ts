import Routes from '../routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomParamsList } from '../BottomNavigator/types';

export type MainParamList = {
  [Routes.BOTTOM]: NavigatorScreenParams<BottomParamsList>;
};
