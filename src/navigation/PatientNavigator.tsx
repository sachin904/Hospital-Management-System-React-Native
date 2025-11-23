
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PatientProfile from '../screens/patient/PatientProfile'
import PatientDashboard from '../screens/patient/PatientDetails'
import MyAppointments from '../screens/patient/MyAppointments'
import BookAppointments from '../screens/patient/BookAppointments'
import AppointmentDetails from '../screens/doctor/AppointmentDetails'
import PatientHomeScreen from '../screens/patient/PatientHomeScreen'
import { RouteProp } from "@react-navigation/native";
import { AppStackParamList } from "./AppNavigator";

type PatientNavRouteProp = RouteProp<AppStackParamList, "Patient">;

const PatientNavigator = ({ route }: { route: PatientNavRouteProp }) => {
   const { username } = route.params;
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='PatientHomeScreen'>
        <Stack.Screen  name="PatientProfile" component={PatientProfile} options={{title:"Patient Profile", headerTitleAlign:"center"}}/>
         <Stack.Screen  name="PatientHomeScreen"  options={{headerShown:false}}>
             {(props) => <PatientHomeScreen {...props} username={username} />}
         </Stack.Screen>
          <Stack.Screen  name="MyAppointments" component={MyAppointments}/>
           <Stack.Screen  name="BookAppointments" component={BookAppointments}/>
            <Stack.Screen  name="AppointmentDetails" component={AppointmentDetails}/>
            
    </Stack.Navigator>
  )
}

export default PatientNavigator