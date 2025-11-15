import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoBox from '../../components/InfoBox'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PatientDashboard from './PatientDetails'
import AppointmentDetails from './Reports'
import { NavigationContainer } from '@react-navigation/native'

const PatientProfile = () => {
 

    const Tab = createMaterialTopTabNavigator();
  return(
  <SafeAreaView style={styles.container}>
    <View style={styles.container1}>

      <Image source={require("../../components/images/person1.png")} style={styles.Image} resizeMode="cover" resizeMethod="auto" />
      <Text style={styles.text}>Akansha Jha</Text>
      <View style={styles.container3} >
        <InfoBox text='69year' iconNeeded='calendar' />
         <InfoBox text='female' iconNeeded='user' />
          <InfoBox text='AB+' iconNeeded='drop' />
      </View>
    </View>

    <View style={styles.container2}>
   
      <Tab.Navigator
        screenOptions={{
           tabBarLabelStyle: {fontSize:18 },
           tabBarActiveTintColor:"green",
          
        }}
      >
         <Tab.Screen  name='View Details' component={PatientDashboard}/>
         <Tab.Screen  name='Reports' component={AppointmentDetails}/>
      </Tab.Navigator>
      
    </View>
  </SafeAreaView>
  )
}

export default PatientProfile

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  },
  container1:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
    
  },
  container2:{
    flex:2,
    backgroundColor:"#d7e6f4"
  },
  imageContainer:{
    height:100,
    width:100,
    backgroundColor:"#fff",
    borderRadius:'50%',
    
  },
  Image:{
   height:100,
    width:100,
    borderRadius:100/2,
  

  },
  text:{
    fontSize:22,
    fontWeight:"bold",
    paddingTop:10
  },
  container3:{
    height:50,
    width:'70%',
  
   
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },

})