/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {   View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyAppointments from './MyAppointments';
import PatientProfile from './PatientProfile';
import PatientHomeContent from './PatientHomeContent';
import UserIcon from '../../components/icons/UserIcon';

import CalendarIcon from '../../components/icons/CalendarIcon';
import HouseIcon from '../../components/icons/HomeIcon';
 
interface PatientProp{
  username:string
}
const PatientHomeScreen = (props:PatientProp) => {
   const Tab = createBottomTabNavigator();
  return (
    <View style={{flex:1}}>
     <Tab.Navigator
        screenOptions={{
           headerShown:false,
           tabBarActiveTintColor:"green",
           
        }}
      >
      <Tab.Screen
          name="Home"
           children={() => <PatientHomeContent username={props.username}/> }
          options={{
             tabBarIcon: () => <HouseIcon/>,
             
          }}
        />

        <Tab.Screen name='My Appointment' component={MyAppointments} options={{
             tabBarIcon: () => <CalendarIcon />,headerShown:true
          }}/>
        <Tab.Screen name='Profile' component={PatientProfile} options={{
             tabBarIcon: () =><UserIcon /> ,headerShown:true
          }}/>
      </Tab.Navigator>
      
    </View>
  )
}

export default PatientHomeScreen


