import React, { Component } from 'react'
import { StyleSheet, View, Text, Button} from "react-native";
import {getData} from "../utils/api"
import {connect} from "react-redux"
import {getDecks } from '../utils/api'
import {recieveDecks } from "../actions"

class Decks extends React.Component {
  componentDidMount(){
    getDecks().then(decks => this.props.recieveAllDecks(decks))
  }

    render() {
        const {decks} = this.props

        return (
            <View style={styles.container}>
                {Object.keys(decks).map((deck) => {
                     const {title, questions } =decks[deck]
                return(
              <View key={deck}>
                  <Text>{title}</Text>
                <Text>{questions.length}</Text>
                <Button onPress={() => 
                    this.props.navigation.navigate('ViewDeck', 
                    {entryId: deck})} title="view deck">

                    </Button>
                    </View>
                )})}
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
    }
  });

  function mapStateToProps(decks){
    return {
      decks
      }
    }
  function mapDispatchToProps(dispatch) {
    return {
      recieveAllDecks : (decks) => dispatch(recieveDecks(decks))
    }
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(Decks)
