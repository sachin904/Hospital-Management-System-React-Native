import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileIcon = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../images/Profile.png")}/>
    </View>
  )
}

export default ProfileIcon

const styles = StyleSheet.create({
    image:{
        height:40,
        width:40
    }
})