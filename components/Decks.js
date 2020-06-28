import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {getData} from "../utils/api"
import {connect} from "react-redux"
import {getDecks } from '../utils/api'
import {recieveDecks } from "../actions"
import { purple, white } from '../utils/colors';

class Decks extends React.Component{
    render() {
      const { decks } = this.props;
      const deckData = Object.keys(decks).map(id => decks[id]);        

      if (deckData.length <= 0) {  
      return (
            <View style={styles.container}>
               <Text style={{fontSize: 15, textAlign: 'center' }}>No Available Decks. Add New Deck Below</Text>
            </View>
        )
    }

    return (
      <FlatList
        style={{ flex: 1}}
        data={deckData}
        renderItem={({ item }) => {
          return (
            <View style={{ justifyContent: 'center', padding: 40, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Deck', {deck: item})}>
                <View>
                  <Text style={{textAlign: 'center', fontSize: 18, color: 'black', paddingVertical: 10, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{textAlign: 'center', fontSize: 16, color: 'darkgray' }}>{Object.keys(item.flashcards || {}).length} cards</Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      alignSelf: "stretch",
      justifyContent: "center",
      padding: 5
    }, card: {
      flex: 1,
      alignItems: "center",
      backgroundColor: purple,
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
      cardBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
    }
  );

  function mapStateToProp(state){
    return state
    }

export default connect(mapStateToProp)(Decks)
