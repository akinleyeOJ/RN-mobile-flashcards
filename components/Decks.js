import React, { Component } from 'react'
import { StyleSheet, View, Text} from "react-native";

export class Decks extends Component {
    render() {
        return (
            <View>
                <Text>Decks</Text>
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
  
export default Decks
