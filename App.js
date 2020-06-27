import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import {AsyncStorage} from 'react-native';
import 'react-native-gesture-handler';
import Decks from "./components/Decks"
import NewDeck from "./components/NewDeck"
import ViewDeck from "./components/ViewDeck"
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import {purple, white} from './utils/colors'
import {Provider} from "react-redux"
import Constants from "expo-constants"
import reducer  from "./reducers"
import middleware from './middleware'
import { handleReceiveDecks } from "./actions/index"
import  { createStore } from "redux"
import Tabs from "./components/Tabs"
import AddCard from "./components/AddCard"
import Quiz from "./components/Quiz"




function MyStatusBar ({backgroundColor, ...props}) {
  return(
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
         <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}



const MainNavigator = createAppContainer(createStackNavigator({
Home: {
  screen: Tabs,
  navigationOptions: {
    header: null
  }
},
ViewDeck: {
  screen: ViewDeck,
  navigationOptions: ({navigation}) => ({
    title: "Deck Info",
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  })
},
AddCard: {
  screen: AddCard,
  navigationOptions: ({navigation}) => ({
    title: "Add Card",
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  })
},
Quiz: {
  screen: Quiz,
  navigationOptions: ({navigation}) => ({
    title: `Quiz: ${navigation.state.params.deck.title}`,
    headerBackTitle: '',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: purple
    }
  })
}},
));

const store = createStore(reducer, middleware);

export default class App extends React.Component {

  storageKey = '@mobile-flashcard:state';

  componentDidMount() {
    store.dispatch(handleReceiveDecks());
  }
  
  render(){
  return (
    <Provider store={store}>
    <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={purple} barStyle="Light-content" />
      <MainNavigator />
    </View>
    </Provider>
  );
}
}

