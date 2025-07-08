import { Image, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  AddUser,
  BackArrowIcon,
  GrayDataIcon,
  GrayHelpIcon,
  GrayInviteIcon,
  GrayKeyIcon,
  GrayMessageIcon,
  GrayNotificationIcon,
  QRCodeIcon,
  SearchIcon,
  WhiteBackArrowIcon
} from '@assets';
import { hp, wp } from '@enums';
import {
  ContactCard,
  CustomHeader,
  IconButton,
  SettingsCard,
  Spacer
} from '@common';

const SettingsScreen = () => {

  const SettingsOptions =[
    {
      id :1 ,
      name :"Account",
      description :"Privacy, security, change number",
      icon : <GrayKeyIcon height={hp(4)} width={wp(8)} />,
      onPress : () => console.log("Account Pressed"),
    },
    {
      id :2 ,
      name :"Chats",
      description :"Chat,history,theme,wallpapers, ",
      icon : <GrayMessageIcon height={hp(4)} width={wp(8)} />,
      onPress : () => console.log("Chats Pressed"),
    },
    {
      id :3 ,
      name :"Notifications",
      description :"Message, group & others",
      icon : <GrayNotificationIcon height={hp(4)} width={wp(8)} />,
      onPress : () => console.log("Notifications Pressed"),
    },
    {
      id :4 ,
      name : "Help",
      description :"Help center,contact us,privacy policy",
      icon : <GrayHelpIcon height={hp(4)} width={wp(8)} />,
      onPress : () => console.log("Help Pressed"),
    },
    {
      id :5,
      name :"Storage and data",
      description :"Network usage, Storage usage",
      icon : <GrayDataIcon height={hp(4)} width={wp(8)} />,
      onPress : () => console.log("Storage and data Pressed"),
    },
    {
      id :6 ,
      name : "Invite a friend",
      description :"Invite a friend to use this app",
      icon : <GrayInviteIcon height={hp(4)} width={wp(8)}/>,
      onPress : () => console.log("Invite a friend Pressed"),
    }
  ]
  // Dummy images
  const AdilPhot0 = require('../../../../assets/images/adilPhoto.png');
  const MarinaPhoto = require('../../../../assets/images/marina.png');
  const DeanPhoto = require('../../../../assets/images/dean.png');
  const MaxPhoto = require('../../../../assets/images/max.png');

  // Dummy data
  const chatList = [
    { id: 1, image: AdilPhot0, bio: "How are you today?", name: "Alex Linderson" },
    { id: 2, image: MarinaPhoto, bio: "Don't miss the meeting.", name: "Team Align" },
    { id: 3, image: DeanPhoto, bio: "See you soon.", name: "Charlie Bates" },
    { id: 4, image: MaxPhoto, bio: "Let's catch up.", name: "Brian Doe" },
    { id: 5, image: MarinaPhoto, bio: "Reminder to call back.", name: "Team Align" },
    { id: 6, image: AdilPhot0, bio: "Project updates?", name: "Zayn Malik" },
    { id: 7, image: MaxPhoto, bio: "Weekly meeting rescheduled.", name: "Steve Smith" },
    { id: 8, image: DeanPhoto, bio: "All set for launch!", name: "Aaron Finch" },
  ];

  // Group contacts by first letter of name
  const groupedContacts = chatList.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, typeof chatList>);

  // Convert grouped object to SectionList format
  const sortedGroups = Object.keys(groupedContacts)
    .sort()
    .map(letter => ({
      title: letter,
      data: groupedContacts[letter],
    }));

  // Header Button Handlers
  const handleHeaderSearchIcon = () => console.log('Search icon pressed');
  const handleHeaderIconButton = () => console.log('Add user icon pressed');
  const handleCallCardImageOnPress = () => console.log('Contact card pressed');

  return (
    <View style={styles.MainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <CustomHeader
          handleFirstIconOnPress={handleHeaderSearchIcon}
          handleSecondIconOnPress={handleHeaderIconButton}
          // backArrowIcon={<WhiteBackArrowIcon height={hp(4)} width={wp(8)} />}
          name={'Settings'}
          // IconButton={null}
          secondIconBorderColor={"#000"}
          
        />
      </View>

      <Spacer />

      <View style={styles.BodyContainer}>
        <TouchableOpacity style={styles.ownerProfileContainer}>
           <View style={{width:wp(18), height:hp(9),paddingLeft:wp(2)}}>
            <IconButton
                borderColor={"#fff"}
                height={hp(9)}
                width={wp(18)}
                icon={<Image 
                    source={AdilPhot0} 
                    style={{ height: hp(9), width: wp(18) }} />}
                onPress={handleCallCardImageOnPress}
                />
            </View> 
            <View style={{width:wp(60), height:hp(9),paddingLeft:wp(2),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={styles.UserName}>Nazrul Islam </Text>
                <Text style={styles.bio}>Never Give Up</Text>
            </View>
            <View style={{width:wp(20), height:hp(9),alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={styles.QRCode} onPress={handleCallCardImageOnPress}>
                    {<QRCodeIcon height={hp(6)} width={wp(12)} />}
                </TouchableOpacity>
            </View>  
        </TouchableOpacity>

        <Spacer height={hp(2)}/>

        <View>
          {SettingsOptions.map((item) => {
            return (
              <View key={item.id} style={styles.SettingsCardContainer}>
               <SettingsCard
               icon={item.icon}
               name={item.name}
              description={item.description}
              onPress={item.onPress}/>
              </View>
            );
          })}
        </View>


        
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      backgroundColor: '#000E08',
    },
    header: {
      height: hp(12),
      width: '100%',
      top: hp(2),
      borderBottomColor: '#e0e0e0',
    },
    BodyContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      borderTopLeftRadius: hp(5),
      borderTopRightRadius: hp(5),
    },
    ownerProfileContainer: {
        width:wp(100),
        height:hp(12),
        // borderWidth:1,
        borderColor:"#000",
        paddingTop:hp(4),
        paddingHorizontal:wp(10),
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    },
    UserName:{
        fontSize:hp(3),
        fontWeight:"600",
        left:wp(4),
    },
    bio:{
        fontSize:hp(2),
        // fontWeight:"600",
        left:wp(4),
    },
    QRCode:{
        
    },
    SettingsCardContainer:{
       gap:hp(6),
    }
  });
  