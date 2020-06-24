import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";
import { getData } from '../utils/api'
export class ViewDeck extends Component {
    render() {
        const deck = this.props.navigation.state.params.entryId
        const decks = getData()
        return (
            <View style={styles.container}>
                <Text>{decks[deck].title} </Text>
                <Text>{decks[deck].questions.length} </Text>
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
  });

export default ViewDeck
