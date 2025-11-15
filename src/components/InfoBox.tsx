import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calendar from './icons/Calendar'
import UserIcon from './icons/UserIcon'
import DropletIcon from './icons/DropletIcon'
import ClockIcon from './icons/ClockIcon'


interface InfoBoxProps{
    text:string,
    iconNeeded:"calendar" | "user" | "drop" | "clock"

}
const InfoBox = (props:InfoBoxProps) => {
  return (
    <View style={styles.smallBox}>
                 {props.iconNeeded==="calendar" && <Calendar/>}  
                 {props.iconNeeded==="user" && <UserIcon/>}  
                   {props.iconNeeded==="drop" && <DropletIcon/>} 
                    {props.iconNeeded==="clock" && <ClockIcon/>}  
                 
                     <Text>{props.text}</Text>
                  </View>
  )
}

export default InfoBox

const styles = StyleSheet.create({
      smallBox:{
    height:30,
    gap:2,
    backgroundColor:"#c6c1ebff",
    borderRadius:10,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:8
  }
})