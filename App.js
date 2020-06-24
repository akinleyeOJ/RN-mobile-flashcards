import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from "./components/Decks"
import NewDeck from "./components/NewDeck"
import ViewDecks from "./components/ViewDeck"
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import {purple, white} from './utils/colors'


const Tabs = TabNavigator ( {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-albums" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: purple,
      tabBarLabel: <Text>Decks</Text>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-add" size={25} color={tabInfo.tintColor} />;

      },
      tabBarColor: purple,
      tabBarLabel: <Text >Add Deck</Text>
    }
  }
});


export default class App extends React.Component {
  render(){
  return (
    <View style={{flex: 1}}>
      <Tabs />
    </View>
  );
}
}

