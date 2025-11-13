import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
const LoginScreen = () => {
    const theme = useColorScheme()==="dark"? colors.dark: colors.light;
  return (
    <View style={[styles.container,{backgroundColor: theme.background}]}>
      <Text style={{color:theme.text}} >LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
      flex:1
    }
})