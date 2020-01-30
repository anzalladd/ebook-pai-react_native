import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {SplashScreenStack, AuthStack, AppStack } from './stackNavigator';

const MainNavigator = createSwitchNavigator(
  {
    SplashScreen: SplashScreenStack,
    AuthScreen: AuthStack,
    AppScreen: AppStack
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const app = createAppContainer(MainNavigator);

export default app;
