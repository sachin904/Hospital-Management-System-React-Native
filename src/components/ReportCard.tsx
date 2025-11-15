import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Sthethoscope from './icons/SthethoscopeIcon'
import PageIcon from './icons/PageIcon'

interface DoctorCardProps{
     name:string,
     day:string,
     date:string,
    
}
const ReportCard = (props:DoctorCardProps) => {
  return (
      <View style={styles.box}>
      <View style={styles.box1}>
        <View >
           <View style={styles.iconBox}>
             <PageIcon/>
            </View>
        </View>
         <View style={styles.details}>
          <Text style={styles.name}>{props.name} Prescriptions</Text>
          <Text style={styles.time}>{props.day}, {props.date}</Text>
         </View>
      </View>
      
    </View>
  )
}

export default ReportCard

const styles = StyleSheet.create({
    box:{
        height:50,
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:10,
        padding:3,
        margin:5
    },
    box1:{
        flexDirection:"row",
        
        alignItems:"center", 
        justifyContent:"flex-start",
        gap:2,
        paddingHorizontal:10
    },
   
 
   
    details:{
        justifyContent:"flex-start",
        
        alignContent:"flex-start",
       

    },
    name:{
       fontSize:16,
       fontWeight:"500",
       color:"#000" 
    },
        time:{
       fontSize:14,
       fontWeight:"medium",
       color:"#928b8bff" ,
      
    },
    iconBox:{
      height:30,
      width:30,
      backgroundColor:"#c6c1ebff",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      color:"blue",
      marginRight:15
    },
})