import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import {AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {purple} from './utils/colors'
import {Provider} from "react-redux"
import Constants from "expo-constants"
import reducer  from "./reducers"
import middleware from './middleware'

import  { createStore } from "redux"
import AppNavigator from './navigation/AppNavigator'
import { setLocalNotification } from './utils/helpers'


function MyStatusBar ({backgroundColor, ...props}) {
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
         <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const store = createStore(reducer, middleware);

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render(){
  return (
    <Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={purple} barStyle="Light-content" />
      <AppNavigator />
    </View>
    </Provider>
  );
}
}

