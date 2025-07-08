import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'

export const CustomTextInput = ({placeholder,value,onChangeText,secureTextEntry,textInputType,textColor}) => {
  return (
   <TextInput 
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={textInputType}
    style={[styles.textInput,{color:textColor}]}
   />
  )
}


const styles = StyleSheet.create({
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:"#CDD1D0",
        width:wp(95),
        height:hp(8),
        fontSize:hp(2),
        fontWeight:"bold",
        
    }
})