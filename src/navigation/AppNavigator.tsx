import { } from 'react-native'
import React from 'react'

import AuthNavigator from "./AuthNavigator";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PatientNavigator from './PatientNavigator';
import DoctorNavigator from './DoctorNavigator';
import AdminNavigator from './AdminNavigator';

export type AppStackParamList = {
  Auth: undefined;
  Patient: { username: string };
  Doctor: undefined;
  Admin: undefined;
};


const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Auth" component={AuthNavigator} />
  <Stack.Screen name="Patient" component={PatientNavigator} />
      <Stack.Screen name="Doctor" component={DoctorNavigator} />
      <Stack.Screen name="Admin" component={AdminNavigator} />
</Stack.Navigator>

  )
}

export default AppNavigator