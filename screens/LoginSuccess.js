'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';
class LoginSuccess extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="light-content"/>
          <LinearGradient
             locations={[0,0.4,1]}
             start={{x: 0.7, y: 0.2}}
             end={{x: 0.5, y: 0.9}}
             colors={[ '#F3BD89',  '#F39C7E','#F17766']}
             style={{ flex:1, alignItems: 'center',justifyContent: 'center',paddingBottom: 200,}}>
            <View style={styles.view}>
                      <Image   style={{ height: 100,
                      borderRadius: 50,
                      width: 100 }}
                      source={require('../img/default_avatar.png')} />
            

                <Text style={styles.text}>こんにちは {this.props.navigation.state.params.Email} !</Text>
                <Text style={styles.text2}> 
                こんにちは今日はどのようにやってい？ </Text>
            </View>
          </LinearGradient>
          <View style={styles.nextButton}>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={ ()=> {
            navigate('SelectScreen');}}>
                  <Text style={{fontWeight: 'bold'}}> START ! </Text> 
              </TouchableOpacity> 
              


          </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
flex: 1,
},
view:{
  flex: 1,
  
   justifyContent: 'center',
  alignItems: 'center',
},
nextButton:{
  flex: 1,
    flexDirection: 'row' , 
   position:'absolute',
   bottom: 0,
   height: 70,
   backgroundColor:'white',
   width: '100%'
},
TouchableOpacity:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 20,
  color: 'white',
  marginTop: 10,
  marginBottom: 15,
  justifyContent: 'center',
 alignItems: 'center',
},
text2:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 15,
  color: 'white',
 justifyContent: 'center',
 alignItems: 'center',
},
});


export default LoginSuccess;