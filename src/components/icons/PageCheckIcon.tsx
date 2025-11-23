import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const PageCheckIcon = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../images/pageIcon.png")}/>
    </View>
  )
}

export default PageCheckIcon

const styles = StyleSheet.create({
    image:{
        height:40,
        width:40
    }
})