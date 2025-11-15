
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DoctorsProfile from '../screens/doctor/DoctorsProfile';
import DoctorDashboard from '../screens/doctor/DoctorDashboard';
import PatientRecords from '../screens/doctor/PatientRecords';
import AppointmentDetails from '../screens/doctor/AppointmentDetails';

const DoctorNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen  name='DoctorsProfile' component={DoctorsProfile}/>
        <Stack.Screen  name='DoctorDashboard' component={DoctorDashboard}/>
        <Stack.Screen  name='PatientRecords' component={PatientRecords}/>
        <Stack.Screen  name='AppointmentDetails' component={AppointmentDetails}/>
    </Stack.Navigator>
  )
}

export default DoctorNavigator