import {  } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { RootStackParamList } from '../types/rootstack';

const Stack= createNativeStackNavigator<RootStackParamList>();
const AuthNavigator = () => {
  return (
   <Stack.Navigator initialRouteName='Splash'>
       <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
   </Stack.Navigator>
  )
}

export default AuthNavigator