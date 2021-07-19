import Routes from '../routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { AuthParamList } from '../AuthNavigator/types';
import { MainParamList } from '../MainNavigator/types';

export type AppParamList = {
  [Routes.AUTH]: NavigatorScreenParams<AuthParamList>;
  [Routes.MAIN]: NavigatorScreenParams<MainParamList>;
};
