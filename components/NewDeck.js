import React, { Component } from 'react'
import {StyleSheet, Text, TextInput, Button, View, TouchableOpacity} from "react-native";
import {saveDeckTitle} from '../utils/api'
import {handleAddDeck, addDeck} from "../actions"
import {connect} from "react-redux"
import { purple } from '../utils/colors';

class NewDeck extends React.Component {
    state = {
        title: '',
    }
   
 addDeck = () => {
        let { title } = this.state;
        title = title.trim();
        if (!title) {

            alert(
             'Please Input Title'
             );

         return;
        }
          this.props.dispatch(handleAddDeck(title));
          this.setState({title: ''});
        this.props.navigation.goBack();
    }

    render() {     
      return (
          <View style={styles.container}>
              <View style={{flex: 1, paddingVertical: 10, justifyContent: 'center'}}>
                  <Text style={styles.title}>Title of your new deck:</Text>
                  <TextInput 
                     style={styles.input} onChangeText={text => this.setState({title: text})}
                      value={this.state.title} />
              </View>
              <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 100}}>
                  <TouchableOpacity onPress={this.addDeck}>
                      <View >
                          <Text style={styles.submitBtn}>Add Deck</Text>
                      </View>
                  </TouchableOpacity>
              </View>
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
        color: "#333",
        textAlign: "center"
    },
    submitBtn: {
        borderWidth: 1.5,
        borderColor: "#FFF",
        color: "#FFF",
        backgroundColor: purple,
        padding: 20,
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