import React, { Component } from 'react'
import {StyleSheet, Text, TextInput, Button, View} from "react-native";
import {saveDeckTitle} from '../utils/api'
import {AddDeck, addDeck} from "../actions"
import {connect} from "react-redux"

import SubmitButton from "./SubmitButton";


export class NewDeck extends Component {
    state = {
        text: ''
    }
     submitName=() => {
         const { text } = this.state
     
   saveDeckTitle(text)
   this.props.dispatch(addDeck(text))
   this.props.navigation.navigate("ViewDeck", {entryId: text })
   this.setState({ text: ''})
}

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>New Decks Title?</Text>
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ text: text})} value={this.state.text}>
                </TextInput>
                <SubmitButton
                   style={styles.submitBtn} onPress={(this.submitName)}
                 />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: "#333"
    },
    submitBtn: {
        borderWidth: 0.5,
        borderColor: "#d6d7da",
        padding: 10,
        borderRadius: 7
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: "#757575",
        margin: 50,
        borderRadius: 8
    }
  });

export default connect()(NewDeck)
