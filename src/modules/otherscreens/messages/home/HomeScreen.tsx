import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AdilPhotoSVG, DeanSVG, MarinaSVG, MaxSVG, PersonSVG, PlusIcon, SearchIcon } from '@assets';
import { hp, wp } from '@enums';
import { CustomHeader, HomeScreenContactCard, IconButton, Spacer } from '@common';

const HomeScreen = ({navigation}) => {
  const AdilPhot0 = require('../../../../assets/images/adilPhoto.png');
  const MarinaPhoto = require('../../../../assets/images/marina.png');
  const DeanPhoto = require('../../../../assets/images/dean.png');
  const MaxPhoto = require('../../../../assets/images/max.png');
  const demoPic = require('../../../../assets/images/person.png');


  const contactStories = [
    { id: 1, name: 'Adil', pic: AdilPhot0 },
    { id: 2, name: 'Marina', pic: MarinaPhoto },
    { id: 3, name: 'Dean', pic: DeanPhoto },
    { id: 4, name: 'Max', pic: MaxPhoto },
    { id: 5, name: 'Adil', pic: AdilPhot0 },
  ];

  const chatList = [
    {
      id: 1,
      image: <AdilPhotoSVG height={hp(9)} width={wp(18)}/>,
      message: "How are you today?",
      messageTime: "2 min ago",
      name: "Alex Linderson",
      status: "Online",
      messageCount: 3,
    },
    {
      id: 2,
      image: <MarinaSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 3,
      image: <DeanSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 4,
      image: <MaxSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {   
      id: 5,
      image: <PersonSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 6,
      image: <AdilPhotoSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 7,
      image: <PersonSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago", 
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 8,
      image: <AdilPhotoSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago", 
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 9,
      image: <PersonSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.", 
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 10,
      image: <AdilPhotoSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align", 
      status: "Online",
      messageCount: 4,
    },
    {
      id: 11,
      image: <PersonSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align",
      status: "Online",
      messageCount: 4,
    },
    {
      id: 12,
      image: <AdilPhotoSVG height={hp(9)} width={wp(18)}/>,
      message: "Don't miss to attend the meeting.",
      messageTime: "2 min ago",
      name: "Team Align", 
      status: "Online",
      messageCount: 4,
    },
  ];
  
// Functions

const handleHeaderSearchIcon = () => {
  console.log('headerSearchIcon pressed');
}

const handleHeaderIconButton = () => {
  console.log('headerIconButton pressed');
}

const handleMyStoryIcon = () => {
  console.log('myStoryIcon pressed');
}

const handleContactStoryIcon = () => {
  console.log('contactStoryIcon pressed');
}

const handleContactCardImage = () => {
  console.log('contactCardImage pressed');
}

const handleContactCard = (item) => {
  navigation.navigate('ChatScreen',{item});
  console.log('contactCard pressed');
}


const handleSwipeleftNotification = () => {
  console.log('swipe left Notification pressed');
}

const handleSwipeleftDelete = () => {
  console.log('swipe left Delete pressed');
}

  return (
    <View style={styles.MainContainer}>

      {/* Header */}
      <View style={styles.header}>
        <CustomHeader
          backArrowIcon={<SearchIcon height={hp(4)} width={wp(8)} />}
          name={'Home'}
          IconButton={
            <Image
              source={demoPic}
              style={{ height: hp(6), width: wp(12), borderRadius: hp(6) }}
            />
          }
          handleFirstIconOnPress={handleHeaderSearchIcon}
          handleSecondIconOnPress={handleHeaderIconButton}
        />
      </View>

      <ScrollView
       style={styles.ScrollContainer}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{ paddingBottom: hp(5) }}>


      <Spacer />

      {/* Stories */}
      <View style={styles.StoriesContainer}>
        {/* My Story */}
        <View style={styles.myStory}>
          <TouchableOpacity style={{ justifyContent: 'center' }}>
            <IconButton
              icon={
                <Image
                  source={demoPic}
                  style={{ height: hp(7), width: wp(14), borderRadius: hp(7) }}
                />
              }
              onPress={handleMyStoryIcon}
              borderColor={'#fff'}
              height={hp(8)}
              width={wp(16)}
            />
          </TouchableOpacity>
          <View style={{ left: wp(10), bottom: hp(0.1), position: 'absolute' }}>
            <PlusIcon height={hp(3)} width={wp(6)} />
          </View>
        </View>

        {/* Contact Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contactsStories}>
          {contactStories.map((item) => (
            <View key={item.id} style={styles.storyItem}>
              <TouchableOpacity style={{ justifyContent: 'center' }}>
                <IconButton
                  icon={
                    <Image
                      source={item.pic}
                      style={{ height: hp(7), width: wp(14), borderRadius: hp(7) }}
                    />
                  }
                  onPress={handleContactStoryIcon}
                  borderColor={'#fff'}
                  height={hp(8)}
                  width={wp(16)}
                />
              </TouchableOpacity>
              <Text style={styles.storyName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Body */}
      <View style={styles.BodyContainer}>
        <View>
        {chatList.map((item) => (
          <View style={{marginVertical: hp(1)}} 
          key={item.id}>
              <HomeScreenContactCard
              image={item.image}
              message={item.message}
              messageTime={item.messageTime}
              name={item.name}
              status={item.status}
              messageCount={item.messageCount}
              onPress={()=>handleContactCard(item)}
              imageOnPress={()=>handleContactCardImage}
              onSwipeLeftNotification={handleSwipeleftNotification}
              onSwipeLeftDelete={handleSwipeleftDelete}
              />
          </View>
        ))}
        </View>
        
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
    bottom:hp(1.1),
    position: 'relative',
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
    flex: 1,
  },
});
