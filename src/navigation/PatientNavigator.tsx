
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PatientProfile from '../screens/patient/PatientProfile'
import PatientDashboard from '../screens/patient/PatientDetails'
import MyAppointments from '../screens/patient/MyAppointments'
import BookAppointments from '../screens/patient/BookAppointments'
import AppointmentDetails from '../screens/doctor/AppointmentDetails'

const PatientNavigator = () => {
   
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='PatientProfile'>
        <Stack.Screen  name="PatientProfile" component={PatientProfile} options={{title:"Patient Profile", headerTitleAlign:"center"}}/>
         <Stack.Screen  name="PatientDashboard" component={PatientDashboard}/>
          <Stack.Screen  name="MyAppointments" component={MyAppointments}/>
           <Stack.Screen  name="BookAppointments" component={BookAppointments}/>
            <Stack.Screen  name="AppointmentDetails" component={AppointmentDetails}/>
            
    </Stack.Navigator>
  )
}

export default PatientNavigator