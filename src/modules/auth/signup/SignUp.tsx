import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  CustomHeader,
  CustomTextInput,
  Spacer,
  TextButton,
} from '@common';
import { BackArrowIcon } from '@assets';
import { hp, wp } from '@enums';

const SignUp = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const upper = /[A-Z]/;
    const lower = /[a-z]/;
    const digit = /[0-9]/;
    const special = /[!@#$%^&*(),.?":{}|<>]/;

    return (
      minLength.test(password) &&
      upper.test(password) &&
      lower.test(password) &&
      digit.test(password) &&
      special.test(password)
    );
  };

  const handleCreateAccount = () => {
    let isValid = true;

    if (!validateEmail(Email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(Password)) {
      setPasswordError(
        'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.'
      );
      isValid = false;
    } else if (Password !== ConfirmPassword) {
      setPasswordError('Passwords do not match.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Account created successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate('HomeScreen');
    }
  };

  const textInput = [
    {
      label: 'Your name',
      placeholder: 'Enter your name',
      value: Name,
      secureTextEntry: false,
      textInputType: 'default',
      onChangeText: setName,
    },
    {
      label: 'Your email',
      placeholder: 'Enter your email',
      value: Email,
      secureTextEntry: false,
      textInputType: 'email-address',
      onChangeText: setEmail,
    },
    {
      label: 'Password',
      placeholder: 'Enter your password',
      value: Password,
      secureTextEntry: true,
      textInputType: 'default',
      onChangeText: setPassword,
    },
    {
      label: 'Confirm Password',
      placeholder: 'Re-enter your password',
      value: ConfirmPassword,
      secureTextEntry: true,
      textInputType: 'default',
      onChangeText: setConfirmPassword,
    },
  ];

  const isFormValid =
    Name &&
    Email &&
    Password &&
    ConfirmPassword &&
    validateEmail(Email) &&
    validatePassword(Password) &&
    Password === ConfirmPassword;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <CustomHeader
          backArrowIcon={<BackArrowIcon height={hp(5)} width={wp(10)} />}
          handleFirstIconOnPress={() => navigation.goBack()}
          secondIconBackgraound={'#fff'}
          name={null}
        />
        <Spacer height={hp(3)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Sign Up with Email</Text>
            <Spacer height={hp(1)} />
            <Text style={styles.subtitle}>
              Get chatting with friends and family today by signing up for our
              chat app!
            </Text>
          </View>
          <Spacer height={hp(5)} />
          <View style={styles.inputContainer}>
            {textInput.map((item, index) => (
              <View key={index}>
                <Text style={styles.inputLabel}>{item.label}</Text>
                <CustomTextInput
                  placeholder={item.placeholder}
                  textInputType={item.textInputType}
                  secureTextEntry={item.secureTextEntry}
                  value={item.value}
                  onChangeText={item.onChangeText}
                />
                {index === 1 && emailError ? (
                  <Text style={styles.errorText}>{emailError}</Text>
                ) : null}
                {index === 2 && passwordError ? (
                  <Text style={styles.errorText}>{passwordError}</Text>
                ) : null}
                {index === 3 && passwordError && Password === ConfirmPassword ? (
                  <Text style={styles.errorText}>{passwordError}</Text>
                ) : null}
              </View>
            ))}
          </View>
          <Spacer height={hp(8)} />
          <View style={styles.buttonContainer}>
            <TextButton
              backgroundColor={isFormValid ? '#24786D' : '#F3F6F6'}
              title={'Create an Account'}
              height={hp(8)}
              onPress={handleCreateAccount}
              width={wp(80)}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(3),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(6),
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: wp(4),
    color: '#797C7B',
  },
  inputContainer: {
    gap: hp(3),
  },
  inputLabel: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#24786D',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: wp(3),
    marginTop: hp(1),
  },
});
