import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {store} from './src/app/store/store';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import ToDo from './src/screens/ToDO/ToDo';
import Counter from './src/screens/Counter/Counter';
import ForgotPasswordScreen from './src/screens/Authentication/ForgotPasswordScreen';
import RegisterScreen from './src/screens/Authentication/RegisterScreen';
import LoginScreen from './src/screens/Authentication/LoginScreen';

// export {default} from './storybook';

const Navigation = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome">
        <Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: 'Welcome Page'}}
        />
        <Screen
          name="View"
          component={ViewImageScreen}
          options={{title: 'Image Page'}}
        />
        <Screen name="ToDo" options={{title: 'My To Do App'}}>
          {props => <ToDo {...props} title="Today's Tasks" />}
        </Screen>
        <Screen
          name="Counter"
          component={Counter}
          options={{title: 'Counter Page'}}
        />
        <Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register with us!'}}
        />
        <Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{title: 'Forgot Password'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
