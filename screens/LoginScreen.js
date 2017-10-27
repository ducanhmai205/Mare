import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert

} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';
import LoginButton from '../screens/LoginButton'
class LoginScreen extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 

UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.1.56/KhoahocAPI/User_Login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('LoginSuccess', { Email: UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
  }
	render() {
    return (
    <View style={styles.container}>
    <StatusBar backgroundColor="white" barStyle="dark-content"/>
     <View style={styles.wrap}>


      		<View style={styles.loginFB}>
      				<LoginButton> </LoginButton>
      		</View>
      		<View style={styles.line}>
			<Text style={{color:'#E3E3E3'}}>────────</Text>
			
					<LinearGradient
                        locations={[0,0.4,1]}
                        start={{x: 0.7, y: 0.2}}
                        end={{x: 0.5, y: 0.9}}
                        colors={[ '#F3BD89',  '#F39C7E','#F17766']}
                        style={styles.circle}>
        					
        				<Text style={{backgroundColor:'rgba(0,0,0,0)',color: 'white'}}>OR </Text>
        					
        					
        			</LinearGradient>

			<Text style={{color:'#E3E3E3'}}>────────</Text>



      		</View>
      		<View style={styles.Input}>
                   <TextInput
                        placeholder="E-mail"
                        style={styles.textMail}
                         onChangeText={UserEmail => this.setState({UserEmail})}
                        keybroadType="email-address"
                   />
          
                   <TextInput
                        placeholder="Password"
                        onChangeText={UserPassword => this.setState({UserPassword})}
 
                        secureTextEntry={true}
                        style={styles.textPass}
                   />
			</View> 

			
					<TouchableOpacity  style={styles.loginButton}  onPress={this.UserLoginFunction}>
					<LinearGradient
                        locations={[0,0.4,1]}
                        start={{x: 0.7, y: 0.2}}
                        end={{x: 0.5, y: 0.9}}
                        colors={[ '#F3BD89',  '#F39C7E','#F17766']}
                        style={{ flex:1, alignItems: 'center',justifyContent: 'center', borderRadius: 5 }}>
        					
        					<Text style={{backgroundColor:'rgba(0,0,0,0)',
        					fontSize: 20,
  							color: 'white',
  							fontStyle:'italic'}}>  LOG IN </Text>
        					
        					
        			</LinearGradient>
        			</TouchableOpacity>

        			<View style={styles.forgetPass}>
				<Text> Password forget </Text>
			</View>

			<View style={styles.underText}>
				<Text> SOME TEXT </Text>
			</View>


	</View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
container:{
	flex: 1,
		backgroundColor: 'white',
},
wrap:{
flex: 1,
	marginHorizontal: 50,
	
},
textMail:{
borderTopWidth:1,
borderBottomWidth:1,
height: 70,
borderColor: '#E3E3E3',
paddingLeft: 20,
},
textPass:{
borderBottomWidth:1,
height: 70,
borderColor: '#E3E3E3',
paddingLeft: 20
},
loginFB:{
	flex: 1,
	marginTop:50,
	marginBottom: 50
},
line:{
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
},
circle: {
	
    width: 50,
    height: 50,
    borderRadius: 100/2,
    alignItems: 'center',
    justifyContent: 'center'
    
},
Input:{
	
	backgroundColor: 'rgba(255, 255,255 ,0.2 )',
	marginTop:35,
	borderLeftWidth:1,
	borderRightWidth:1,
	borderColor: '#E3E3E3',
},
loginButton:{
	flex: 1,
	marginTop: 30,

},
forgetPass:{
	flex: 1,
	 alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
},
underText:{
	flex: 1,
	 alignItems: 'center',
    justifyContent: 'center'
}

});


export default LoginScreen;