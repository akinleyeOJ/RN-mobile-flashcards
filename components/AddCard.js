import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView} from "react-native"

import {NavigationActions} from "react-navigation"
import {addCardToDeck} from "../utils/api"
import {connect} from "react-redux"
import { handleAddFlashcard } from '../actions/index'
import{ purple, white} from "../utils/colors"
import SubmitButton from './SubmitButton'

class AddCard extends React.Component {
    state = {
        question: "",
        answer: ""
    }

addCard = () => {
        let { question, answer } = this.state;
        const { deck } = this.props.navigation.state.params;
   question = question.trim();
       answer = answer.trim()
    if (!question || !answer) {
            alert('Enter Question and Answer First');
            return;
        }
        this.props.dispatch(handleAddFlashcard(deck.id, question, answer));
        this.props.navigation.goBack();
    }
render() {
        const { deck } = this.props.navigation.state.params;
        
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
        {/* 1 */}
                <Text style={styles.title}>Input Question
                    </Text>
                    <TextInput style={styles.input}  onChangeText={text => this.setState({question: text})} />
        {/* 2 */}             
                 <Text style={styles.title}>Input Answer
                    </Text>
                <TextInput style={styles.input}   onChangeText={text => this.setState({answer: text})} />
        {/* 3 */}
                    <SubmitButton style={styles.submitBtn} onPress={this.addCard} />                   
              
            </View>
            </KeyboardAvoidingView>
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
        color: "#333",
    },
    submitBtn: {
        borderWidth: 0.5,
        borderColor: "#d6d7da",
        padding: 10,
        borderRadius: 7
    },
    submitBtnText: {
        color: white,
       
        fontSize: 22,
        textAlign: "center"
    },
    input: {
        width: 200,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: "#757575",
        margin: 25,
        borderRadius: 8
    }
})

export default connect()(AddCard)