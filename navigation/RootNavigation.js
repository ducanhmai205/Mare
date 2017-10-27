import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginButton from '../screens/LoginButton';
import RadioButton from '../screens/RadioButton';
import LoginSuccess from '../screens/LoginSuccess';
import SelectScreen from '../screens/SelectScreen';




const DemoNavigation = StackNavigator(
{
  Home: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: {screen: LoginScreen},
  LoginButton: {screen: LoginButton},
  RadioButton: {screen: RadioButton},
  LoginSuccess: {screen: LoginSuccess },
  SelectScreen: {screen: SelectScreen}
},
{
	headerMode:'none'
}

);
export default DemoNavigation;
