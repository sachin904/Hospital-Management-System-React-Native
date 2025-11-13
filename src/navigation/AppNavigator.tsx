import { } from 'react-native'
import React from 'react'

import AuthNavigator from "./AuthNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Auth" component={AuthNavigator} />
</Stack.Navigator>

  )
}

export default AppNavigator