import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CalendarPlusIcon = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../images/calendar.png")}/>
    </View>
  )
}

export default CalendarPlusIcon

const styles = StyleSheet.create({
    image:{
        height:40,
        width:40
    }
})