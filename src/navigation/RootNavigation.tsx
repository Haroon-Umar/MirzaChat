import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SignIn, SignUp, WelcomeScreen } from '@modules';
import BottomTabNavigation from './BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false,}}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUp} />
    <Stack.Screen name="SignInScreen" component={SignIn} />
    {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
  </Stack.Navigator>
);

const AppNavigation = () => (
  <GestureHandlerRootView>
      <Stack.Navigator screenOptions={{ headerShown: false,}} >
              {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
    </Stack.Navigator>
  </GestureHandlerRootView>
 
);

export const RootNavigation = () => {
    const [userState,setUserState]=useState(true);
  return  (
    <NavigationContainer>
       { userState ? <AppNavigation/> : <AuthNavigation/> }
    </NavigationContainer>
  )
}

export default RootNavigation;
const styles = StyleSheet.create({})