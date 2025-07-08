import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AudioCallIcon, BackArrowIcon, VideoCallIcon } from '@assets'
import { hp, wp } from '@enums'
import { Spacer } from '../spacer'

export const ChatScreenHeader = ({profileicon,userName,status,backArrowonPress}) => {
  return (
    
    <View style={styles.headerContainer}>
        <View style={styles.backButtonView}>
            <TouchableOpacity onPress={backArrowonPress}>
                 {<BackArrowIcon height={hp(4)} width={wp(8)}/>}
            </TouchableOpacity>
        </View>
            <Spacer width={wp(2)}/>
        <TouchableOpacity style={styles.infoView}>
            <TouchableOpacity style={styles.profilePic}>
                {React.cloneElement(profileicon, {
                    height: hp(7),
                    width: wp(14),
            })}
            </TouchableOpacity>
            <Spacer width={wp(2)}/>
            <View style={{justifyContent:'flex-start'}}>
                <Text style={{fontSize:wp(5)}}>{userName}</Text>
                <Text style={{fontSize:wp(3)}}>{status}</Text>
            </View>
        </TouchableOpacity>
        <Spacer width={wp(2)}/>
        <View style={styles.callButtosView}>
            <TouchableOpacity>
                {<AudioCallIcon height={hp(4)} width={wp(8)}/>}
            </TouchableOpacity>
            <Spacer width={wp(4)}/>
            <TouchableOpacity>
                {<VideoCallIcon height={hp(4)} width={wp(8)}/>}
            </TouchableOpacity>
        </View>
        
      
    </View>
  )
}


const styles = StyleSheet.create({
    headerContainer:{
        width:wp(100),
        height:hp(9),
        paddingHorizontal:wp(5),
        // backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    infoView:{
        width: wp(55),
        height: hp(6),
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'#4343'
    },
    callButtosView:{
        width: wp(25),
        height: hp(6),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'white'
    },
    backButtonView:{
        width: wp(12),
        height: hp(6),
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    profilePic:{
        width:wp(14),
        height:hp(7),
        borderRadius:hp(6),
        // borderWidth:1,
        // padding:hp(3),
        // borderColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})