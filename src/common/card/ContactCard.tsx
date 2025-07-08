import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { Spacer } from '../spacer';

export const ContactCard = ({ name, image, bio, onPress }) => {

  return (
    
      <TouchableOpacity style={styles.container} onPress={onPress}>
            <TouchableOpacity style={styles.image} onPress={onPress}>
              <Image source={image} style={{width: wp(18), height: hp(9), borderRadius: hp(9)}}/>
          </TouchableOpacity>
          <View style={styles.nameContainer}>
              <Text style={styles.name}>{name}</Text>
                <Spacer width={wp(2)}/>
                <Text style={styles.messageTime}>{bio}</Text>
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
        paddingHorizontal: wp(2),
    },
    image: {
        width: wp(20),
        height: hp(10),
        borderRadius: hp(10),
    }, 
    nameContainer: {
        justifyContent: 'flex-start',
        left: wp(2),
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
