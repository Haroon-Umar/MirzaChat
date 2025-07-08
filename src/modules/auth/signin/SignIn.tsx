import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CustomHeader, CustomTextInput, IconButton, Spacer, TextButton } from '@common';
import { AppleLogo, AppleLogoBlack, BackArrowIcon, FbLogo, GoogleLogo } from '@assets';
import { hp, wp } from '@enums';
import { isIOS } from '@helpers';

const SignIn = ({ navigation }) => {

  const handleFacebook = () => {
    console.log('Facebook Button Pressed');
  };

  const handleGoogle = () => {
    console.log('Google Button Pressed');
  };

  const handleApple = () => {
    console.log('Apple Button Pressed');
  };


  const handleLogin = () => {
    navigation.navigate('SignInScreen');
    console.log('Login Button Pressed');
  };

  const handleForgetPassword = () => {
    console.log('Forget Password Button Pressed');
  };

  const iconButon = [
    {
      id:1,
      name:'facebook',
      icon:<FbLogo height={hp(12)} width={wp(12)}/>,
      height:hp(8),
      width:wp(16),
      borderColor:'#000',
      borderWidth:1,
      onPress:handleFacebook,
    },
    {
      id:2,
      name:'google',
      icon:<GoogleLogo height={hp(12)} width={wp(12)}/>,
      height:hp(8),
      width:wp(16),
      borderColor:'#000',
      borderWidth:1,
      onPress:handleGoogle,
    },
    {
      id:3,
      name:'Apple',
      icon:<AppleLogoBlack height={hp(8)} width={wp(8)}/>,
      height:hp(8),
      width:wp(16),
      borderColor:'#000',
      borderWidth:1,
      onPress:handleApple,
    },
  ];


  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    const minLength = /.{8,}/
    const upper = /[A-Z]/
    const lower = /[a-z]/
    const digit = /[0-9]/
    const special = /[!@#$%^&*(),.?":{}|<>]/

    return (
      minLength.test(password) &&
      upper.test(password) &&
      lower.test(password) &&
      digit.test(password) &&
      special.test(password)
    )
  }

  const handleSignIn = () => {
    let isValid = true

    if (!validateEmail(Email)) {
      setEmailError('Please enter a valid email.')
      isValid = false
    } else {
      setEmailError('')
    }

    if (!validatePassword(Password)) {
      setPasswordError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.')
      isValid = false
    } else {
      setPasswordError("")
    }

    if (isValid) {
      console.log('Login Successful!');
      navigation.navigate('HomeScreen'); // Navigate to Home Screen after successful login
      setEmail('');
      setPassword('');
      // navigation.navigate('NextScreen') // Future use
    }
  };

  const isFormValid = Email && Password && validateEmail(Email) && validatePassword(Password);

  return (
    <View style={styles.container}>
      <CustomHeader
        backArrowIcon={<BackArrowIcon height={hp(5)} width={wp(10)} />}
        handleFirstIconOnPress={()=> navigation.goBack()}
        secondIconBackgraound={'#fff'}
        name={null}
      />
      
      <Spacer height={hp(5)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: wp(6), fontWeight: 'bold' }}>Log in to Mirza Chat</Text>
          <Text style={{ textAlign: 'center', fontSize: wp(4), color: '#797C7B' }}>
            Welcome back! Sign in using your social account or email to continue using Mirza Chat.
          </Text>
        </View>
        <Spacer height={hp(3)} />
        <View 
        style={{flexDirection:'row',justifyContent:'center', alignItems:'center',gap:wp(4)}} >
          {
            iconButon.map((item)=>{
              return(
                <View key={item.id} style={{alignItems:'center',marginTop:hp(2)}}>
                  <IconButton
                  icon={item.icon}
                  borderColor={item.borderColor}
                  height={item.height}
                  width={item.width}
                  onPress={item.onPress}
                  />
                </View>
              )
            })
          }
        </View>
        <Spacer height={hp(3)}/>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:wp(2),marginTop:hp(2)}}>
          <View style={{borderWidth:0.5,borderColor:"#aeaeae",width:wp(35)}}></View>
          <Text style={{color:"#797C7B",fontSize:hp(2)}}>OR</Text>
          <View style={{borderWidth:0.5,borderColor:"#aeaeae",width:wp(35)}}></View>
        </View>

        <Spacer height={hp(5)} />

        <View style={styles.inputContainer}>
          {/* Email */}
          <View>
            <Text style={styles.labelText}>Your Email</Text>
            <CustomTextInput
              placeholder="Enter your email"
              textInputType="email-address"
              secureTextEntry={false}
              value={Email}
              onChangeText={setEmail}
              textColor="#000"
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
          </View>

          {/* Password */}
          <View>
            <Text style={styles.labelText}>Password</Text>
            <CustomTextInput
              placeholder="Enter your password"
              textInputType="default"
              secureTextEntry={true}
              value={Password}
              onChangeText={setPassword}
              textColor="#000"
            />
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
          </View>
        </View>

        <Spacer height={hp(7)} />
        <View style={styles.buttonContainer}>
          <TextButton
            backgroundColor={isFormValid ? "#24786D" : "#F3F6F6"}
            title={"Sign In"}
            height={hp(8)}
            onPress={handleSignIn}
            width={wp(80)}
            textSize={2}
          />

          <TextButton
            backgroundColor={null}
            height={hp(8)}
            textColor={"#24786D"}
            title={"Forget Password?"}
            width={wp(90)}
            onPress={handleForgetPassword}
            textSize={2}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: wp(3)
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    gap: hp(3)
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: isIOS() ? hp(0) : hp(3),
  },
  errorText: {
    color: 'red',
    fontSize: wp(3),
    marginTop: hp(1)
  },
  labelText: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: "#24786D"
  }
})
