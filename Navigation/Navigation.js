import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../Screens/Menu.js'

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
      }
    }
  
    render() {
        return (
            <NavigationContainer>
            <Stack.Navigator
                screenOptions={() => ({
                gestureEnabled: false,
                headerShown: false
                })}>
                <Stack.Screen name="Menu" component={Menu} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    }
  }
  