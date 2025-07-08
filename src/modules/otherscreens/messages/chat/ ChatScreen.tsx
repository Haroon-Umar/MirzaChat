import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatScreenHeader } from '@common'
import { AddUser } from '@assets'

const  ChatScreen = ({navigation, route}) => {
    const item=route.params.item;
  return (
    <SafeAreaView style={{flex:1}}>
       <View style={styles.headerView}>
            <ChatScreenHeader
            profileicon={item.image}
            userName={item.name}
            status={item.status}
            backArrowonPress={()=>navigation.pop()}/>
       </View>
       <View style={styles.messagesView}>
            <Text>Hello</Text>
       </View>
       <View style={styles.bottomOptionsView}>
            <Text>HI</Text>
       </View>
    </SafeAreaView>
    
  )
}

export default  ChatScreen

const styles = StyleSheet.create({
    headerView:{
        width:wp(100),
        height:hp(9),
        // flex:1,
        backgroundColor:'gray',
    },
    messagesView:{
       width:wp(100),
       height:hp(80),
       backgroundColor:'yellow', 
    },
    bottomOptionsView:{
        width:wp(100),
        height:hp(9),
        backgroundColor:'red'
    }
})