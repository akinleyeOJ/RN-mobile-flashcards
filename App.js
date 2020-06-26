import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Decks from "./components/Decks"
import NewDeck from "./components/NewDeck"
import ViewDeck from "./components/ViewDeck"
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import {purple, white} from './utils/colors'
import {Provider} from "react-redux"
import reducer  from "./reducers"
import  { createStore } from "redux"
import Constants from "expo-constants"
import AddCard from "./components/AddCard"

function MyStatusBar ({backgroundColor, ...props}) {
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
         <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

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


const MainNavigator = StackNavigator({
Home: {
  screen: Tabs,
  navigationOptions: {
    header: null
  }
},
ViewDeck: {
  screen: ViewDeck,
  navigationOptions: {
    title: "Deck Info",
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  }
},
AddCard: {
  screen: AddCard,
  navigationOptions: {
    title: "Add Card",
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  }
}
  })

export default class App extends React.Component {
  render(){
  return (
    <Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={purple} barStyle="Light-content" />
      <MainNavigator />
    </View>
    </Provider>
  );
}
}

