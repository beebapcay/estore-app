import Routes from '../routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { HomeParamList } from '../HomeNavigator/types';
import { MotivationParamList } from '../MotivationNavigator/types';
import { CartParamList } from '../CartNavigator/types';
import { FavouritesParamList } from '../FavouritesNavigator/types';
import { ProfileParamList } from '../ProfileNavigator/types';

export type BottomParamsList = {
  [Routes.HOME]: NavigatorScreenParams<HomeParamList>;
  [Routes.MOTIVATION]: NavigatorScreenParams<MotivationParamList>;
  [Routes.CART]: NavigatorScreenParams<CartParamList>;
  [Routes.FAVOURITES]: NavigatorScreenParams<FavouritesParamList>;
  [Routes.PROFILE]: NavigatorScreenParams<ProfileParamList>;
};
