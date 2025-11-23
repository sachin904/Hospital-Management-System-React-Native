import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

import CalendarIcon from './icons/CalendarIcon'
import CalendarPlusIcon from './icons/CalendarPlusIcon'
import PageCheckIcon from './icons/PageCheckIcon'
import ProfileIcon from './icons/ProfileIcon'

interface NavigationCardProps{
    icon:"calendarPlusIcon"|"Page"|"profile"
    text1:string
    text2:string
    onPress:()=>void
}
const NavigationCard = (props:NavigationCardProps) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      { props.icon=== "calendarPlusIcon" && <CalendarPlusIcon />}
       { props.icon=== "Page" && <PageCheckIcon />}
       { props.icon=== "profile" && <ProfileIcon />}
      <Text style={styles.text1}>{props.text1}</Text>
       <Text style={styles.text1}>{props.text2}</Text>
    </Pressable>
  )
}

export default NavigationCard

const styles = StyleSheet.create({
     container:{
        
        height:130,
        width:110,
        backgroundColor:colors.selected,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20


     },
     text1:{
        fontSize:16,
        color:"#fff"
     }
})