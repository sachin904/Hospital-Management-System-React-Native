import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../theme/colors'
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
  const theme = useColorScheme() === "dark" ? colors.dark : colors.light;
  const navigation = useNavigation();

  useEffect(() => {
       const timer= setTimeout(()=>{
        navigation.navigate('Login' as never)
       },2000)
       return ()=> clearTimeout(timer);
  },[navigation]);


  return (
    <View style={[styles.container,{ backgroundColor: theme.background }]}>
      <Text style={[styles.logo,{ color: theme.text }]}>City Hospital</Text>
      <ActivityIndicator size="large" color={theme.primary}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  logo:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
  }
})