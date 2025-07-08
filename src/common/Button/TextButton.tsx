import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'

export const TextButton = ({title, textColor, backgroundColor, onPress,width,height,textSize}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    activeOpacity={0.5}
    style={[styles.fullButton,{backgroundColor:backgroundColor,width:width,height:height}]}>
<Text style={[styles.title,{ color: textColor, fontSize: textSize ? hp(textSize) : hp(3) }]}>{title}</Text>
</TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    fullButton:{
        borderRadius:hp(2),
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        // fontSize:hp(3),
        fontWeight:"bold",
        // color:colors
    }
})