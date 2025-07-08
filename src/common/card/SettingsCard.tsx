import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { Spacer } from '../spacer';

export const SettingsCard = ({ name, icon, description, onPress }) => {

  return (
    
      <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.image}>
              {icon}
          </View>
          <View style={styles.nameContainer}>
              <Text style={styles.name}>{name}</Text>
                <Spacer width={wp(2)}/>
                <Text style={styles.messageTime}>{description}</Text>
          </View> 
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: wp(90),
        paddingHorizontal: wp(4),
        paddingVertical: hp(1),
    },
    image: {
        width: wp(16),
        height: hp(8),
        borderRadius: hp(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#F2F8F7",
    }, 
    nameContainer: {
        justifyContent: 'flex-start',
        left: wp(5),
        width: wp(65),
    },
    messageTimeContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: wp(2),
    },
    messageTime: {
        fontSize: hp(1.8),
        color: 'black',
    }, 
    name: {
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },  
    CallIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: wp(8),
    },
    
})
