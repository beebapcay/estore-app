import React, { useEffect } from 'react';
import Routes from '../routes';
import { createStackNavigator } from '@react-navigation/stack';
import { AppParamList } from './types';
import MainNavigator from '../MainNavigator/MainNavigator';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { User } from '../../models';
import { userActions, fetchUserData } from '../../redux/slices';

const Stack = createStackNavigator<AppParamList>();

const AppNavigator = (props: any) => {
  const userData = useAppSelector((state) => state.userState.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const userStr = await AsyncStorage.getItem('@user');
        if (userStr !== null) {
          const user = JSON.parse(userStr) as { username: string; password: string };
          dispatch(fetchUserData({ username: user.username, password: user.password }));
        } else dispatch(userActions.loginUser({} as User));
      } catch (error) {
        dispatch(userActions.loginUser({} as User));
        console.log('Loading Cart Error');
      }
    })();
  }, []);

  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      {JSON.stringify(userData) != JSON.stringify({}) ? (
        <Stack.Screen name={Routes.MAIN} component={MainNavigator} />
      ) : (
        <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
