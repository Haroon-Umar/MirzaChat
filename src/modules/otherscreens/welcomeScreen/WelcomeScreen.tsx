import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { hp, wp } from '@enums'
import { IconButton, Spacer, TextButton } from '@common'
import { AppleLogo, FbLogo, GoogleLogo } from '@assets'
import { IOS_TOP_PADDING, isIOS } from '@helpers'

const WelcomeScreen = ({ navigation }) => {
  const handleFacebook = () => console.log('Facebook Button Pressed')
  const handleGoogle = () => console.log('Google Button Pressed')
  const handleApple = () => console.log('Apple Button Pressed')
  const handleSignUp = () => navigation.navigate('SignUpScreen')
  const handleLogin = () => navigation.navigate('SignInScreen')

  const iconButtons = [
    {
      id: 1,
      icon: <FbLogo height={hp(12)} width={wp(12)} />,
      onPress: handleFacebook,
    },
    {
      id: 2,
      icon: <GoogleLogo height={hp(12)} width={wp(12)} />,
      onPress: handleGoogle,
    },
    {
      id: 3,
      icon: <AppleLogo height={hp(6)} width={wp(12)} />,
      onPress: handleApple,
    },
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Absolute Gradient Background */}
      <View style={StyleSheet.absoluteFill}>
        <LinearGradient
          colors={['#43116ac1', '#0a1832ab']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
      </View>

      {/* Scrollable Content on top */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Connect friends easily & quickly</Text>
          <Spacer height={hp(3)} />
          <Text style={styles.subtitle}>
            Our Chat app is Perfect way to stay connected with your friends and
            family
          </Text>

          <Spacer height={hp(4)} />
          <View style={styles.iconRow}>
            {iconButtons.map((item) => (
              <View key={item.id} style={{ marginHorizontal: wp(2) }}>
                <IconButton
                  icon={item.icon}
                  borderColor={'#fff'}
                  height={hp(8)}
                  width={wp(16)}
                  onPress={item.onPress}
                />
              </View>
            ))}
          </View>

          <Spacer height={hp(4)} />
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <Spacer height={hp(3)} />
          <TextButton
            backgroundColor={'#fff'}
            height={hp(8)}
            textColor={'#000E08'}
            title={'Sign up with Email'}
            width={wp(90)}
            onPress={handleSignUp}
          />

          <Spacer height={hp(2)} />
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an Account ?</Text>
            <TextButton
              backgroundColor={null}
              title={'Login'}
              textColor={'#fff'}
              onPress={handleLogin}
              textSize={2.5}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollContent: {
    paddingTop: IOS_TOP_PADDING + hp(4),
    paddingBottom: hp(6),
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: isIOS() ? hp(9.5): hp(8),
    textAlign: 'center',
  },
  subtitle: {
    color: '#B9C1BE',
    fontSize: hp(2),
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#aeaeae',
    width: wp(35),
  },
  orText: {
    color: '#fff',
    fontSize: hp(2),
    marginHorizontal: wp(2),
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(2),
  },
  loginText: {
    color: '#fff',
    fontSize: hp(2),
  },
})
