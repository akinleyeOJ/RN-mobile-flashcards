import React from 'react'
import { View, Text, Platform } from 'react-native'
import Decks from './Decks'
import NewDeck from './NewDeck'
import {purple, white} from '../utils/colors'
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';




const Tabs = {
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
  }

  const navigationOptions = {
    tabBarOptions: {
        activeTintColor: "purple",
         style: {
        height: 56,
        backgroundColor: "white",
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
  
  const TabsView = createBottomTabNavigator(Tabs, navigationOptions)

  export default TabsView