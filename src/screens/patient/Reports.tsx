import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sthethoscope from '../../components/icons/SthethoscopeIcon'
import ReportCard from '../../components/ReportCard'
import PlusIcon from '../../components/icons/PlusIcon'

const Reports = () => {
  return (
    <View style={styles.container}>
      
          <View style={styles.InfoContainer1}>
            <View style={styles.heading}>
              <View style={styles.titleBox}>
            <View style={styles.iconBox}>
              <Sthethoscope/>
            </View>
          
             <Text style={styles.title} >Doctor's Prescription</Text>
               </View>
             <Text style={styles.uploadText}>Upload Reports</Text>
          </View>
          <ScrollView style={styles.prescriptions}>
             <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/>
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/> 
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/> 
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/>
               </ScrollView>
          </View>
          <View style={styles.InfoContainer1}>
              <View style={styles.heading}>
            <View style={styles.titleBox}>
            <View style={styles.iconBox}>
              <PlusIcon/>
            </View>
             <Text style={styles.title} >Lab Reports</Text>
           
              
             </View>
              <Text style={styles.uploadText}>Upload Reports</Text>
          </View>
          <ScrollView style={styles.prescriptions}>
             <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/>
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/> 
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/> 
               <ReportCard name='Dr. Isha ' day='sunday' date="24th march, 2025"/>
               </ScrollView>
          </View>
      
    </View>
     
  )
}

export default Reports

const styles = StyleSheet.create({
  container:{
    flex:1
   },
    titleBox:{
      flex:1,
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center",
      
      
    },
    InfoContainer1:{
      paddingVertical:15,
      flex:1,
     
      paddingHorizontal:15,
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
      fontSize:16,
      fontWeight:"bold",

    },
    prescriptions:{
      marginTop:20
    },
    uploadText:{
      fontSize:16,
      fontWeight:"bold",
      color:"#cf1761ff",
     
    },
    heading:{
         flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
    }
})