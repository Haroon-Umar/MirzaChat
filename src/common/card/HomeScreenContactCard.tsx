import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { Swipeable } from 'react-native-gesture-handler';
import { NotificationIcon, TrashIcon } from '@assets';
import { Spacer } from '../spacer';

export const HomeScreenContactCard = ({ name, image, status, message, messageTime, onPress ,messageCount, onSwipeLeft, imageOnPress, onSwipeLeftNotification, onSwipeLeftDelete}) => {

  const renderRightActions = () => (
    <View style={{backgroundColor: '#fff',flexDirection:'row',marginRight: wp(4), justifyContent: 'center', alignItems: 'center', height: '100%', width: wp(20)}}>
        <TouchableOpacity style={{marginRight: wp(2), backgroundColor:"#000", borderRadius: hp(10), padding: hp(1)}}
        onPress={onSwipeLeftNotification}>
            <NotificationIcon width={wp(6)} height={hp(3)}/>
        </TouchableOpacity>
        <Spacer width={wp(2)}/>
        <TouchableOpacity style={{backgroundColor:"red", borderRadius: hp(10), padding: hp(1)}}
        onPress={onSwipeLeftDelete}>
            <TrashIcon  width={wp(6)} height={hp(3)}/>
        </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={onSwipeLeft}  // Handle left swipe here
    >
      <TouchableOpacity style={styles.container} onPress={onPress}>
          <TouchableOpacity style={styles.image} onPress={imageOnPress}>
            {image}
          </TouchableOpacity>
          <View style={styles.nameContainer}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.messageTimeContainer}>
              <Text style={styles.messageTime}>{messageTime}</Text>
              <Text style={styles.messageCount}>{messageCount}</Text>
          </View>
      </TouchableOpacity>
    </Swipeable>
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
        fontSize: hp(1.5),
        color: 'gray',
    },
    messageCount: {
        fontSize: hp(1.5),
    },
    name: {
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    message: {
        fontSize: hp(1.8),
    },
})
