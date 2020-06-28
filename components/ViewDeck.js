import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";
import { getData } from '../utils/api'
import {connect} from "react-redux"
import ActionButton from './ActionButton'
import { handleDeleteDeck } from '../actions/index'

import { white, black, red, purple, green, yellow } from '../utils/colors';


export class ViewDeck extends React.Component {

  handleDelete = () => {
    const { deck } = this.props
    this.props.dispatch(handleDeleteDeck(deck.id))
    this.props.navigation.goBack();
  }

  deleteDeck = () => {
    const { deck } = this.props
    Alert.alert(deck.title, 'Confirm Delete !',
      [
        { text: 'Yes', onPress: () => this.handleDelete() },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );

  }


  render() {
    const { deck } = this.props

    if (!deck) {
      return null
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.mainText}>{deck.title}</Text>
          <Text style={styles.otherText}>{Object.keys(deck.flashcards).length} Cards in Deck</Text>
        
          <ActionButton styles={styles} color={purple} text={'Add Card'}  onPress={() => this.props.navigation.navigate('AddCard', { deck: deck })} />
          
          <ActionButton  styles={styles} color={green} text={'Quiz'} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })} />

          <ActionButton color={red} styles={styles} text={'Delete Deck'} 
          
          onPress={this.deleteDeck} />

        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iosBtn: {
      borderRadius: 7,
      width: 170,
      padding: 10,
      height: 45,
      margin: 5
  },
  submitBtnText: {
      color: white,
      textAlign: 'center',
      fontSize: 22
  },
  card: {
      flex: 1,
      alignItems: "center",
      alignSelf: "stretch",
      padding: 10,
      backgroundColor: black,
      justifyContent: "center",
      margin: 8,
    
      borderRadius: 10,
      shadowColor: "rgba(0,0,0,0.34)",
      shadowOffset: {
        width: 0,
        height: 3,
      }, shadowRadius: 4, shadowOpacity: 1},
      mainText: {
          fontSize: 40,
          color: white
      },
      otherText: {
        fontSize: 30,
        color: white,
        marginBottom: 160
      }
});

function mapStateToProps(state, props) {
  return {
    deck: state.decks[props.navigation.state.params.deck.id]
  }
}

export default connect(mapStateToProps)(ViewDeck)