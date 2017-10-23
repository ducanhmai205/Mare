import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';


export default class App extends React.Component {
   render() {
    
    
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          

         
          <RootNavigation />
        </View>
      );
    }
     }
  

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Constants.statusBarHeight,
    
  },
  statusBar: {
    backgroundColor: "#ffa07a",
    height: Constants.statusBarHeight,
  },
});
