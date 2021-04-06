/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnBoarding} from './app/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
