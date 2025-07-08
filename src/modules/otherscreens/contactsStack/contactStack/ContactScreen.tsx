import { SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  AddUser,
  SearchIcon
} from '@assets';
import { hp, wp } from '@enums';
import {
  ContactCard,
  CustomHeader,
  Spacer
} from '@common';

const ContactScreen = () => {
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
          backArrowIcon={<SearchIcon height={hp(4)} width={wp(8)} />}
          name={'Contact'}
          IconButton={<AddUser />}
        />
      </View>

      <Spacer />

      {/* Section List Body */}
      <View style={styles.BodyContainer}>
        <SectionList
          sections={sortedGroups}
          keyExtractor={(item, index) => item.name + index}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(5) }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <ContactCard
              image={item.image}
              name={item.name}
              bio={item.bio}
              onPress={handleCallCardImageOnPress}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ContactScreen;

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
    sectionHeader: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 15,
      marginTop: 10,
      color: '#000',
    },
  });
  