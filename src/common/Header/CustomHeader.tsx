import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, wp } from '@enums'
import { isIOS } from '@helpers'

export const CustomHeader = ({
  backArrowIcon,
  name,
  IconButton,
  handleFirstIconOnPress,
  handleSecondIconOnPress,
  secondIconBorderColor,
  secondIconBackgraound,
}) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backArrowIcon}
        onPress={handleFirstIconOnPress}
        activeOpacity={0.7}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {backArrowIcon}
      </TouchableOpacity>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{name}</Text>
      </View>

      {/* Right-side icon */}
      <TouchableOpacity
        style={[
          styles.iconButton,
          {
            backgroundColor: secondIconBackgraound ?? '#000',
            borderColor: secondIconBorderColor ?? '#fff',
          },
        ]}
        onPress={handleSecondIconOnPress}
        activeOpacity={0.7}
      >
        {IconButton}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    top: isIOS() ? hp(1.5) : hp(1), // Safe padding for iOS
    paddingBottom: hp(1),
    backgroundColor: '#00000000', // transparent or desired bg
  },
  backArrowIcon: {
    width: wp(12),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  titleContainer: {
    justifyContent: 'center',
    width: wp(60),
    height: wp(14),
  },
  titleText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(12),
    height: hp(6),
    borderRadius: hp(6),
    borderWidth: 0.5,
  },
})
