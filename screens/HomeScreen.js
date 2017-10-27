import React from 'react';
import { StyleSheet, Text,StatusBar,Image, View, Button, TouchableOpacity,Dimensions } from 'react-native';

import { LinearGradient } from 'expo';
export default class HomeScreen extends React.Component {
 
	static navigationOptions = {
		title: 'Home',
		};



  render() {
  	 

  	    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        
        <LinearGradient
             locations={[0,0.4,1]}
             start={{x: 0.7, y: 0.2}}
             end={{x: 0.5, y: 0.9}}
             colors={[ '#F3BD89',  '#F39C7E','#F17766']}
             style={{ flex:1, alignItems: 'center', borderRadius: 5 }}>
        
        	<StatusBar backgroundColor="white" barStyle="light-content"/>
			<View style={styles.image}>        
				<Image source={require('../img/default_avatar.png')}
                  style={{ height: 100,
    	          borderRadius: 50,
    	          width: 100 }}
                />
                
                <View ><Text></Text></View>
                <Text style={styles.text}>SERVICE NAME</Text>
                <View><Text></Text></View>
                
              	<Text style={styles.text}>こんにちは今日</Text>
               
        	</View>

        </LinearGradient>
        
        <View style={styles.loginButton}>
              <TouchableOpacity style={styles.loginButtonText} onPress={ ()=> {
        		navigate('RegisterScreen');
              }}>
                 <Text>Register</Text>
              </TouchableOpacity> 
              
              <View style = {styles.lineStyle}></View>
              <TouchableOpacity style={styles.loginButtonText} onPress={ ()=> {
        		navigate('LoginScreen');
              }}>
            	 <Text>Login</Text>
              </TouchableOpacity>          
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: "#ffa07a",
  },
  image:{
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',

  },
  lineStyle:{
        borderWidth: 1,
        borderColor:'#E3E3E3',
        margin:1,
    },
  text:{
  	backgroundColor:'rgba(0,0,0,0)',
  	
  	fontSize: 20,
  	color: 'white'
  },
  loginButton: {
  	flex: 1,
  	flexDirection: 'row' , 
   position:'absolute',
   bottom: 0,
   height:70,
   backgroundColor:'white',
   width: '100%'

 },
 loginButtonText: {
 	flex: 1,
 	justifyContent: 'center',
 	alignItems: 'center',
 	 
 }
 
});
