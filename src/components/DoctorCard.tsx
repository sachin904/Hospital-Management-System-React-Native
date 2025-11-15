import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoBox from './InfoBox'

interface DoctorCardProps{
     name:string,
     speciality:string,
     address:string,
     day:string,
     date:string,
     time:string,
     imageUrl:string
}
const DoctorCard = (props:DoctorCardProps) => {
    console.log(props.imageUrl);
  return (
    <View style={styles.box}>
      <View style={styles.box1}>
        <View style={styles.photo}>
           <Image source={require("../components/images/image.png")}  style={styles.image} resizeMode="cover" />
        </View>
         <View style={styles.details}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.address}>{props.speciality},{props.address}</Text>
         </View>
      </View>
      <View style={styles.box2}>
          <InfoBox iconNeeded='calendar' text={`${props.day}, ${props.date}`}/>
          <InfoBox iconNeeded='clock' text={props.time}/>
            
      </View>
    </View>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
    box:{
        height:130,
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:10,
        padding:10,
        margin:5
    },
    box1:{
        flexDirection:"row",
        height:"70%",
        
        justifyContent:"flex-start",
        gap:20,
        
    },
    box2:{
      height:"100%",
       flexDirection:"row",
       justifyContent:"flex-start",
       gap:15
    },
    photo:{
        height:"90%",
        width:"20%",
        borderRadius:15
    },
    image:{
         height:"100%",
        width:"100%",
        borderRadius:15
    },
    details:{
        justifyContent:"flex-start",
       
        alignContent:"flex-start",
        paddingVertical:10

    },
    name:{
       fontSize:18,
       fontWeight:"bold",
       color:"#000" 
    },
        address:{
       fontSize:18,
       fontWeight:"bold",
       color:"#928b8bff" ,
      
    }
   
})