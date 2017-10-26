'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class LoginSuccess extends Component {
  render() {
  	const {goBack} = this.props.navigation;
    return (
      <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
         </View>

    );
  }
}

const styles = StyleSheet.create({
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
},
 

 TextComponentStyle: {
   fontSize: 20,
  color: "#000",
  textAlign: 'center', 
  marginBottom: 15
 }
});
 



export default LoginSuccess;