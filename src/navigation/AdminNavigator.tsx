import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdminDashboard from '../screens/admin/AdminDashboard';
import ManageAppointsment from '../screens/admin/ManageAppointsment';
import ManageDoctors from '../screens/admin/ManageDoctors';
import ManagePatients from '../screens/admin/ManagePatients';
import Reports from '../screens/admin/Reports';

const AdminNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
         <Stack.Screen name="ManageAppointsment" component={ManageAppointsment}/>
          <Stack.Screen name="ManageDoctors" component={ManageDoctors}/>
           <Stack.Screen name="ManagePatients" component={ManagePatients}/>
            <Stack.Screen name="Reports" component={Reports}/>
             
    </Stack.Navigator>
  )
}

export default AdminNavigator