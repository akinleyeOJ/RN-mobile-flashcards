import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View, KeyboardAvoidingView} from "react-native"

import {NavigationActions} from "react-navigation"
import {addCardToDeck} from "../utils/api"
import {connect} from "react-redux"
import {addCard} from "../actions"

import SubmitButton from "./SubmitButton";

import{ purple, white} from "../utils/colors"
import deck from '../reducers'


class AddCard extends React.Component {
    state = {
        question: "",
        answer: "",
        correctAnswer: ""
    }

    submitCard = (deck) => {
        const {question, answer, correctAnswer} = this.state

        if(question && answer) {
           this.props.dispatch(addCard({ question, answer, correctAnswer, deck }))
           addCardToDeck(deck, { question, answer, correctAnswer })
           this.setState({ question:"", answer: "", correctAnswer: ""})
           this.props.navigation.dispatch(NavigationActions.back({ key: null }))
    }
}


    render() {
        const deckName =  this.props.navigation.state.params.entryId

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
         {/* 1 */}
                    <Text style={styles.title}>Input Question
                    </Text>
                    <TextInput style={styles.input}
                    onChangeText={(question) => this.setState({question})}
                    value={this.state.question}>

                    </TextInput>
        {/* 2 */}
                  <Text style={styles.title}>Input Answer
                    </Text>
                    <TextInput style={styles.input}
                    onChangeText={(answer) => this.setState({answer})}
                    value={this.state.answer}>
                    </TextInput>
          {/* 3 */}
                   <Text style={styles.title2}>Is This Correct Answer? 
                    </Text>
                    <Text style={styles.warning}>(Enter True or False Text Only)</Text>
                    <TextInput style={styles.input}
                    onChangeText={(correctAnswer) => this.setState({correctAnswer})}
                    value={this.state.correctAnswer}>
                    </TextInput>
                 <SubmitButton
                   style={styles.submitBtn} onPress={() => this.submitCard(deckName)}
                 />
                   
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
    title2: {
        fontSize: 18,
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
    warning:{
        color: "#FF6347"
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