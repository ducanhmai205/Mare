import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

import { Facebook } from "expo";



export default class LoginButton extends Component {
  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057',
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        
          <TouchableOpacity style={styles.one} onPress={this._handleFacebookLogin}>
              <Text style={styles.textLogin}> Login with FB</Text>
            </TouchableOpacity>
       
        
        
       
       
 
 
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
   },
   textLogin:{
   backgroundColor:'rgba(0,0,0,0)',
   fontSize: 20,
    color: 'white'
   },
  one:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#01579B',
     },

  
   
 
}
);