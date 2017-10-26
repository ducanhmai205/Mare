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
import { LinearGradient } from 'expo';
import LoginButton from '../screens/LoginButton';
import RadioButton from '../screens/RadioButton';

class LoginScreen extends Component {
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
  UserRegistrationFunction = () =>{
 
 
 const { UserName }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
 
fetch('http://192.168.1.56/KhoahocAPI/user_registration.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: UserName,
 
    email: UserEmail,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 

        Alert.alert(responseJson);
 
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
                        placeholder="Name"
                        onChangeText={UserName => this.setState({UserName})}
                        style={styles.textInput}

                   />
                   <TextInput
                        placeholder="E-mail"
                        onChangeText={UserEmail => this.setState({UserEmail})}
                        style={styles.textInput}

                   />
          
                   <TextInput
                        placeholder="Password"
                        onChangeText={UserPassword => this.setState({UserPassword})}
                        secureTextEntry={true}
                        style={styles.textInput}
                   />
      </View> 

          <View style={styles.radio}>
               <RadioButton />
          </View>

      
          <TouchableOpacity  style={styles.registerButton} onPress={this.UserRegistrationFunction} >
          <LinearGradient
                        locations={[0,0.4,1]}
                        start={{x: 0.7, y: 0.2}}
                        end={{x: 0.5, y: 0.9}}
                        colors={[ '#F3BD89',  '#F39C7E','#F17766']}
                        style={{ flex:1, alignItems: 'center',justifyContent: 'center', borderRadius: 5 }}>
                  
                  <Text style={{backgroundColor:'rgba(0,0,0,0)',
                  fontSize: 20,
                color: 'white',
                fontStyle:'italic'}}>  Register </Text>
                  
                  
              </LinearGradient>
              </TouchableOpacity>

              
      <View style={styles.underText}>
        <Text style={{textDecorationLine: 'underline',fontWeight:'bold'}}> SOME TEXT </Text>
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

textInput:{
borderTopWidth:1,
borderBottomWidth:1,
height: 70,
borderColor: '#E3E3E3',
paddingLeft: 20,
},

loginFB:{
  flex: 1,
  marginTop:50,
  marginBottom: 25
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
  marginBottom: 15
},

radio:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
registerButton:{
  flex: 1,
},
underText:{
  flex: 1,
   alignItems: 'center',
    justifyContent: 'center',
    
}

});


export default LoginScreen;