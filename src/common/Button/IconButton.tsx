import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'

export const IconButton = ({icon,onPress,borderColor,height,width}) => {
  return (
   <TouchableOpacity onPress={onPress} 
   style={[styles.IconButton,{borderColor:borderColor,height:height,width:width}]}>
    {icon}
   </TouchableOpacity>
  )
}

// export default IconButton

const styles = StyleSheet.create({
  IconButton:{
    borderWidth:1,
    borderRadius:hp(16),
    justifyContent:'center',
    alignItems:'center',
  }
})