import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { Swipeable } from 'react-native-gesture-handler';
import { AudioCallIcon, NotificationIcon, TrashIcon, VideoCallIcon } from '@assets';
import { Spacer } from '../spacer';

export const ReacentCallCard = ({ name, image, status, message, messageTime, onPress ,messageCount, CallCardImageOnPress, recentCallhandleAudioCallIconOnPress, recentCallhandleVideoCallIconOnPress}) => {

  return (
    
      <TouchableOpacity style={styles.container} onPress={onPress}>
            <TouchableOpacity style={styles.image} onPress={CallCardImageOnPress}>
              <Image source={image} style={{width: wp(18), height: hp(9), borderRadius: hp(9)}}/>
          </TouchableOpacity>
          <View style={styles.nameContainer}>
              <Text style={styles.name}>{name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {status}
                <Spacer width={wp(2)}/>
                <Text style={styles.messageTime}>{messageTime}</Text>
              </View>
          </View>
          <View style={styles.CallIconContainer}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} 
            onPress={recentCallhandleAudioCallIconOnPress}>
                {<AudioCallIcon height={hp(4)} width={wp(8)}/>}
            </TouchableOpacity>
             <Spacer width={wp(2)}/>
             <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}
             onPress={recentCallhandleVideoCallIconOnPress}>
                {<VideoCallIcon height={hp(4)} width={wp(8)}/>}
            </TouchableOpacity>
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
