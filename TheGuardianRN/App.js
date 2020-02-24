/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListNews from './src/screens/ListNews'

const Stack = createStackNavigator()
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ListNews" component={ListNews} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
