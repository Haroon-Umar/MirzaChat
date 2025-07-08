import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CallScreen, ChatScreen, ContactScreen, HomeScreen, SettingsScreen } from '@modules';
import { MessageIcon, CallIcon, ContactsIcon, SettingsIcon, ActiveMessageIcon, GrayMessageIcon, GrayCallIcon, ActiveCallIcon, ActiveContactIcon, GrayContactIcon, ActiveSettingsIcon, GraySettingsIcon } from '@assets';
import { hp, wp } from '@enums';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name='ChatScreen' component={ChatScreen}/>
  </Stack.Navigator>
);

const CallStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Call" component={CallScreen} />
  </Stack.Navigator>
);

const ContactStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Contact" component={ContactScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
  </Stack.Navigator>
);

export const BottomTabNavigation = () => {
    const insets = useSafeAreaInsets();

    return (
      <Tab.Navigator
        screenOptions={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          return {
            headerShown: false,
            tabBarActiveTintColor: '#24786D',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: [
              {
                backgroundColor: '#ffffff',
                height: hp(8) + insets.bottom,
                justifyContent: 'center',
                alignItems: 'center',
                // paddingBottom: insets.bottom,
              },
              routeName === 'ChatScreen' ? { display: 'none' } : null,
            ],
          };
        }}
      >
      <Tab.Screen
        name="Messages"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ActiveMessageIcon height={hp(4)} width={wp(8)} /> : <GrayMessageIcon height={hp(4)} width={wp(8)} />   
          ),
          tabBarLabel: 'Messages',
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ActiveCallIcon height={hp(4)} width={wp(8)} /> : <GrayCallIcon height={hp(4)} width={wp(8)} />
          ),
          tabBarLabel: 'Calls',
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ActiveContactIcon height={hp(4)} width={wp(8)} /> : <GrayContactIcon height={hp(4)} width={wp(8)} />
          ),
          tabBarLabel: 'Contacts',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ActiveSettingsIcon height={hp(4)} width={wp(8)} /> : <GraySettingsIcon height={hp(4)} width={wp(8)} />
          ),
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
const styles = StyleSheet.create({});
