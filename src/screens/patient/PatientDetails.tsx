/* eslint-disable react-native/no-inline-styles */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoIcon from '../../components/icons/InfoIcon'
import PlusIcon from '../../components/icons/PlusIcon'
import Sthethoscope from '../../components/icons/SthethoscopeIcon'
import DoctorCard from '../../components/DoctorCard'

const PatientDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
       
        <View style={styles.InfoContainer}>
          <View style={styles.heading}>
            <View style={styles.iconBox}>
              <InfoIcon/>
            </View>
             <Text style={styles.title} >Personal Information</Text>
          </View>
      
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Address</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>Bangloresdadsfsdf</Text>
                   </View>
                 
                  
              </View>
          </View>
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Blood Group</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>AB+</Text>
                   </View>
                 
                  
              </View>
          </View>
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Phone no.</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>+91 7672890987</Text>
                   </View>
                 
                  
              </View>
          </View>
         
        </View>
         <View style={styles.InfoContainer}>
          <View style={styles.heading}>
            <View style={styles.iconBox}>
              <PlusIcon/>
            </View>
             <Text style={styles.title} >Emergency Contact Details</Text>
          </View>
      
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Contact Number</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>+91 7672890976</Text>
                   </View>
                 
                  
              </View>
          </View>
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Name</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>Sumit</Text>
                   </View>
                 
                  
              </View>
          </View>
           <View style={styles.infoBox}>
              <View style={styles.info}>
                <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.field}>Relationship</Text>
                   </View>
                      <View style={{flex:1,alignContent:"flex-start", flexDirection:"row"}}>
                   <Text style={styles.data}>Brother</Text>
                   </View>
                 
                  
              </View>
          </View>
         
        </View>
        
          <View style={styles.heading}>
            <View style={styles.iconBox}>
              <Sthethoscope/>
            </View>
             <Text style={styles.title} >Passed Appointments</Text>
          </View>
         
             <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
           <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
           <DoctorCard name='Dr. Inara Isani' speciality='Hear Sugrgeon' address='Delhi' day="sunday" date='2nd March 2026' time='08:00' imageUrl="../components/images/image.png" />
          
          
         
        
        
      </ScrollView>
    </View>
  )
}
//////////////////////////////////aplly view All
export default PatientDetails

const styles = StyleSheet.create({
   container:{
    flex:1
   },
     slide: {
        padding: 100,
        
        height: "100%"
    },
  
    item: {
        margin: 40,
        height: 100
    },
    InfoContainer:{
      paddingVertical:15,
      
      height:160,
      paddingHorizontal:15,
    },
    heading:{
  
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      
      
    },
    iconBox:{
      height:25,
      width:25,
      backgroundColor:"#c6c1ebff",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      color:"blue",
      marginRight:15
    },
    title:{
      fontSize:18,
      fontWeight:"bold",

    },
    infoBox:{
       flex:1,
        paddingVertical:5,
     
     
    },
    info:{
      flexDirection:"row",
      justifyContent:"space-between",
      
      
    },
    field:{
      color:"#595656ff",
      fontSize:16,
      fontWeight:"600", 
    },
    data:{
         color:"#000",
      fontSize:16,
      fontWeight:"500",
      textAlign:"left"
     
    }
})