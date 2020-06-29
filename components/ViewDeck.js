import React, { Component } from 'react'
import {StyleSheet, Text, View, Alert, Button} from "react-native";
import { getData } from '../utils/api'
import {connect} from "react-redux"
import ActionButton from './ActionButton'
import { white, black, red, purple } from '../utils/colors';
import { handleDeleteDeck } from '../actions/index'


export class ViewDeck extends React.Component {


    render() {
        const deck = this.props.navigation.state.params.entryId
        const {decks} = this.props
        let disabled
        if(decks[deck].questions.length === 0) {
          disabled = true
        } else {
          disabled = false
        }
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>{decks[deck].title} </Text>
                <Text style={styles.otherText}>{decks[deck].questions.length} Cards </Text>
                <Text style={styles.otherText}>Enter Cards To Start Quiz</Text>
           <ActionButton styles={styles} color={purple}
               text={'Add Card'} 
               onPress={() => this.props.navigation.navigate("AddCard", {entryId: deck })}
               />
            <ActionButton styles={styles} color={black} disabled={disabled} style={disabled ? styles.disabled : styles.styles}
               text={'Start Quiz'} 
               onPress={() => this.props.navigation.navigate("Quiz", {entryId: deck })}/>
               <ActionButton color={red} styles={styles} text={'Delete Deck'}  />
            </View>
            
        )
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
          color: black
      },
      otherText: {
        fontSize: 30,
        color: purple,
        marginBottom: 160
      }
});
  function mapStateToProps(decks){
    return {
      decks
      }
    }

export default connect(mapStateToProps)(ViewDeck)