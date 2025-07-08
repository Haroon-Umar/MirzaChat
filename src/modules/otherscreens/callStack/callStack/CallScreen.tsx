import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import {  CallIconWhite, IncomingCallIcon, MissedCallIcon, OutgoingCallIcon, PlusIcon, SearchIcon  } from '@assets';
import { hp, wp } from '@enums';
import { CustomHeader, HomeScreenContactCard, IconButton, ReacentCallCard, Spacer } from '@common';

const CallScreen = () => {
  const AdilPhot0 = require('../../../../assets/images/adilPhoto.png');
  const MarinaPhoto = require('../../../../assets/images/marina.png');
  const DeanPhoto = require('../../../../assets/images/dean.png');
  const MaxPhoto = require('../../../../assets/images/max.png');
  const demoPic = require('../../../../assets/images/person.png');

  const Callicon = require('../../../../assets/images/callIcon.png')



  const chatList = [
    {
      id: 1,
      image: AdilPhot0,
      message: "How are you today?",
      messageTime: "Today, 10:00 AM",
      name: "Alex Linderson",
      status: <IncomingCallIcon/>,
      messageCount: 3,
    },
    {
      id: 2,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 10:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 3,
      image: DeanPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 10:00 AM",
      name: "Team Align",
      status: <MissedCallIcon/>,
      messageCount: 4,
    },
    {
      id: 4,
      image: MaxPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {   
      id: 5,
      image: AdilPhot0,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 6,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 7,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM", 
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 8,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM", 
      name: "Team Align",
        status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 9,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.", 
      messageTime: "Today, 11:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 10,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align", 
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 11,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align",
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
    {
      id: 12,
      image: MarinaPhoto,
      message: "Don't miss to attend the meeting.",
      messageTime: "Today, 11:00 AM",
      name: "Team Align", 
      status: <OutgoingCallIcon/>,
      messageCount: 4,
    },
  ];


  // Funtions

  const handleHeaderSearchIcon = () => {
    console.log('headerSearchIcon pressed');
  }

  const handleHeaderIconButton = () => {
    console.log('headerIconButton pressed');
  }

  const handleCallCardImageOnPress = () => {
    console.log('call Card Image  pressed');
  }

  const handleRecentCallAudioCallIconOnPress = () => {
    console.log('recent Call AudioCall Icon pressed');
  }

  const handleRecentCallVideoCallIconOnPress = () => {
    console.log('recent Call Video Call Icon pressed');
  }

  return (
    <View style={styles.MainContainer}>

      {/* Header */}
      <View style={styles.header}>
        <CustomHeader
          handleFirstIconOnPress={handleHeaderSearchIcon}
          handleSecondIconOnPress={handleHeaderIconButton}
          backArrowIcon={<SearchIcon height={hp(4)} width={wp(8)} />}
          name={'Calls'}
          IconButton={ <CallIconWhite/>}
        />
      </View>

      <ScrollView
       style={styles.ScrollContainer}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ paddingBottom: hp(5) }}>


      <Spacer />
      {/* Body */}
      <View style={styles.BodyContainer}>
        <View>
        {chatList.map((item) => (
          <View style={{marginVertical: hp(1)}} 
          key={item.id}>
              <ReacentCallCard
            //   CallImageOnPress={handleCallCardImageOnPress}
              image={item.image}
              message={item.message}
              messageTime={item.messageTime}
              name={item.name}
              status={item.status}
              messageCount={item.messageCount}
              onPress={null}
              recentCallhandleAudioCallIconOnPress={handleRecentCallAudioCallIconOnPress}
              recentCallhandleVideoCallIconOnPress={handleRecentCallVideoCallIconOnPress}
              CallCardImageOnPress={handleCallCardImageOnPress}
              />
          </View>
        ))}
        </View>
        
      </View>
      </ScrollView>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#000E08',
  },
  header: {
    height: hp(12),
    width: '100%',
    top: hp(2),
    // borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  StoriesContainer: {
    height: hp(16),
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
  },
  BodyContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius:hp(5),
    borderTopRightRadius:hp(5),
  },
  myStory: {
    justifyContent: 'center',
    paddingRight: wp(3),
    bottom:hp(1.1)
    // position: 'relative',
  },
  contactsStories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: wp(3),
  },
  storyName: {
    color: '#fff',
    fontSize: wp(3),
    marginTop: hp(0.5),
  },
  ScrollContainer: {
    // flex: 1,/
  },
});
