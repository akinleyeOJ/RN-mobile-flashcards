import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Button} from "react-native";
import {getData} from "../utils/api"
import {connect} from "react-redux"
import {getDecks } from '../utils/api'
import {receiveDecks } from "../actions"
import { purple, black, white } from '../utils/colors';

class Decks extends React.Component {
  componentDidMount(){
    getDecks().then(decks => this.props.receiveAllDecks(decks))
  }

    render() {
        const {decks} = this.props

        return (
            <ScrollView style={styles.container}>
               <Text style={styles.headText}>Click "Add Deck" For a New Deck</Text>
                {Object.keys(decks).map((deck) => {
                     const {title, questions } =decks[deck]
                return(
              
              <View key={deck} style={styles.card}>
                  <Text style={styles.cardText}>{title}</Text>
                <Text style={styles.cardText}>{questions.length} Cards</Text>
                <Button style={{color: white}} onPress={() => 
                    this.props.navigation.navigate('Deck', 
                    {entryId: deck})} title="View deck">

                    </Button>
                    </View>
                )})}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    height: 200,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: 'purple',
    paddingHorizontal: 20,
    alignSelf: "stretch",
    padding: 45,
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }, card: {
    flex: 1,
    alignItems: "center",
    backgroundColor: black,
    justifyContent: "center",
    margin: 8,
    height: 200,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.34)",
    shadowOffset: {
      width: 0,
      height: 3,
    }, shadowRadius: 4, shadowOpacity: 1},
    cardText: {
      fontSize: 30,
      color: white
    },
    headText: {
      fontSize: 15,
      color: white,
      textAlign: "center"
    },
  }
);


function mapStateToProps(decks){
  return {
    decks
    }
  }
function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks : (decks) => dispatch(receiveDecks(decks))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Decks)