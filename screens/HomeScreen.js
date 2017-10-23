import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {

	static navigationOptions = {
		title: 'Home',
		};



  render() {
  	    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        
        <TouchableOpacity
        title="Nhan vao"
        onPress={ ()=> {
        	navigate('RegisterScreen');
        }}
        >

       	<View>
       	<Text>
       	an vao display
       	</Text>

       	</View>
       	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: "#ffa07a",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
