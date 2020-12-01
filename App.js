import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigater} from 'react-navigation-tabs';
import booktransaction from './screens/booktransaction';
import search from './screens/search';

export default class app extends React.Component() {
render(){
   return (
     <appContainer/>
    );
  }
}

const tabNavigater = createBottomTabNavigater({
  transaction : {screen : booktransaction},
  search : {screen : search},
})

const appContainer = createAppContainer(tabNavigater);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
