import { useTheme } from 'native-base';
import { StackNavigationOptions } from '@react-navigation/stack';

const useHeader = (title: string): StackNavigationOptions => {
  const { colors } = useTheme();

  const options: StackNavigationOptions = {
    title: title,
    headerStyle: {
      backgroundColor: colors.background,
      shadowColor: 'transparent',
      elevation: 0
    },
    headerTintColor: colors.title,
    headerTitleAlign: 'center',
    headerTitleContainerStyle: {
      marginTop: 5
    },
    headerTitleStyle: {
      fontSize: 20
    }
  };
  return options;
};

export default useHeader;
