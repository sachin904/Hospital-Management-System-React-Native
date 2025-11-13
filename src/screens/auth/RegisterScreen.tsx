import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
const RegisterScreen = () => {
    const theme = useColorScheme() === "dark" ? colors.dark: colors.light;
  return (
    <View style={{backgroundColor:theme.background}}>
      <Text style={{color: theme.text}}>RegisterScreen</Text>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})