'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Icon
} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

class SelectScreen extends Component {
  constructor(){
        super()
        this.state = {
            text: ''
        }
        this.onSelect = this.onSelect.bind(this)
    }

  onSelect(index, value){
  this.setState({
    text: `Selected index: ${index} , value: ${value}`
  })
}
  render() {
    const {goBack} = this.props.navigation;
     const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="white" barStyle="light-content"/>
          <LinearGradient
             locations={[0,0.4,1]}
             start={{x: 0.7, y: 0.2}}
             end={{x: 0.5, y: 0.9}}
             colors={[ '#F3BD89',  '#F39C7E','#F17766']}
             style={{ flex:1}}>
            <View style={styles.icon}>
                <TouchableOpacity onPress={ () => goBack(null) }>
                      <Ionicons name="ios-arrow-back-outline" size={20}  />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
              <Text style={styles.text2}>こんにちは今日はどのようにやってい？ </Text>
                 <View style={styles.inside}>
                  <RadioGroup
                  size={15}
                  color='#fafafa'
                  
                  
                  thickness={8}
                     onSelect = {(index, value) => this.onSelect(index, value)}>
                   
                     <RadioButton  activeColor='#80d8ff' value={'item1'} >
                       <Text style={styles.text3}>こんにちは今日はどの</Text>
                                  </RadioButton>
                    
                     <RadioButton activeColor='#80d8ff' value={'item2'}>
                       <Text style={styles.text3}>こんにちは今日はどの</Text>
                     </RadioButton>
 
                     <RadioButton activeColor='#80d8ff' value={'item3'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>

                     <RadioButton activeColor='#80d8ff' value={'item4'} >
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                                  </RadioButton>
              
                     <RadioButton activeColor='#80d8ff' value={'item5'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
 
                     <RadioButton activeColor='#80d8ff' highlightColor='#84ffff' value={'item6'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                     <RadioButton activeColor='#80d8ff' value={'item7'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                     <RadioButton activeColor='#80d8ff' value={'item8'}>
                       <Text style={styles.text3}>こんにちは今日はどのよ</Text>
                     </RadioButton>
                   </RadioGroup>             
                    

                 </View>   
            </View>
          </LinearGradient>

          <View style={styles.nextButton}>
                    <TouchableOpacity style={styles.TouchableOpacity} onPress={ ()=> {
                          navigate('');}}>
                                <Text style={{fontWeight: 'bold'}}> NEXT ! </Text> 
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
icon:{
backgroundColor:'rgba(0,0,0,0)',
marginTop:40,
marginLeft:30,
},
inside:{
  paddingTop:30,
},
center:{
  flex: 1,
paddingTop: 60,
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
text2:{
  backgroundColor:'rgba(0,0,0,0)',
  fontSize: 15,
  color: 'white',
 justifyContent: 'center',
 alignItems: 'center',
},
text3:{
  backgroundColor:'rgba(0,0,0,0)',
  
  color: 'white',
 justifyContent: 'center',
 alignItems: 'center',
},
});


export default SelectScreen;