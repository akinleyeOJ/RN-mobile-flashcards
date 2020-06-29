import React, { Component } from 'react'
import {StyleSheet, Text, TextInput, Button, View} from "react-native";
import {saveDeckTitle} from '../utils/api'
import {AddDeck, addDeck} from "../actions"
import {connect} from "react-redux"
import {red} from "../utils/colors"
import SubmitButton from "./SubmitButton";


export class NewDeck extends Component {
    state = {
        text: ''
    }
     submitName=() => {
         const { text } = this.state
     
   if(this.state.text){
   saveDeckTitle(text)
   this.props.dispatch(addDeck(text))
   this.props.navigation.navigate("Decks", {entryId: text })
   this.setState({ text: ''})
}
     }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Enter New Deck Here</Text>
                <TextInput style={styles.input} 
                onChangeText={(text) => this.setState({ text: text})} value={this.state.text}>
                </TextInput>
                <Text style={styles.warning}>Enter Text Before Submit</Text>
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
    warning:{
     color: "#FF6347"
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