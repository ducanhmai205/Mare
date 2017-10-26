import React, { Component } from 'react';
import {  Text,View, StyleSheet } from 'react-native';


import RadioButton from 'radio-button-react-native';


export default class App extends Component {
  constructor (props){
    super(props)
      this.state = {
            value: 0
        }
    
}
 
 
handleOnPress(value){
    this.setState({value:value})
}
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.container1}>
                <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                <Text>Button1</Text>
                 </RadioButton>
              </View>  
                  
                 <View style={styles.container2}>  
                 <RadioButton currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
                 <Text>Button2</Text>
                 </RadioButton>
                 </View>
                 
             
                 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop:20

   },
   container1:{
   marginRight:20
   },
   container2:{
   marginLeft:10
   }
 
});
