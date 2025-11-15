import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

interface TypeSelectorProps{
    variant:"Primary" | "Secondary",
    
    text: string,
     onPress?: ()=>void
    
}

  const variantStyle = {
  "Primary": {backgroundColor:colors.selected},
  "Secondary": {backgroundColor:"#e4e6eaff"}
}


const TypeSelector = (props:TypeSelectorProps) => {

  return (
     <Pressable onPress={props.onPress} style={[variantStyle[props.variant],styles.typeSelector]}>
                              <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  )
}

export default TypeSelector

const styles = StyleSheet.create({
     typeSelector:{
    height:40,
    width:'30%',
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center"
    },
    text:{
      fontSize:14,
      fontWeight:"bold",
      
    }
})