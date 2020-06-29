import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import 'react-native-gesture-handler';
import Decks from "../components/Decks"
import NewDeck from "../components/NewDeck"
import Deck from "../components/ViewDeck"
import Tabs from "../components/Tabs"
import AddCard from "../components/AddCard"
import Quiz from "../components/Quiz"
import {purple, white} from '../utils/colors'

export default createAppContainer(createStackNavigator({
Home: {
  screen: Tabs,
  navigationOptions: {
    header: null
  }
},
Deck: {
  screen: Deck,
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
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
}},
));

