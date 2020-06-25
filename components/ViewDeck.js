import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";
import { getData } from '../utils/api'
import {connect} from "react-redux"
import ActionButton from './ActionButton'
import { white, purple } from '../utils/colors';



export class ViewDeck extends Component {
    render() {
        const deck = this.props.navigation.state.params.entryId
        const {decks} = this.props
        return (
            <View style={styles.container}>
                <Text>{decks[deck].title} </Text>
                <Text>{decks[deck].questions.length} </Text>
           <ActionButton styles={styles} color={purple}
               text={'Add Card'} 
               onPress={() => this.props.navigation.navigate("AddDeck", {entryId: deck })}/>
            <ActionButton styles={styles} color={purple}
               text={'Start Quiz'} 
               onPress={() => this.props.navigation.navigate("Quiz", {entryId: deck })}/>
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
    iosBtn: {
        borderRadius: 7,
        width: 170,
        padding: 10,
        height: 45,
        margin: 5
    },
    submitBtnText: {
        color: white,
        textAlign: 'center',
        fontSize: 22
    }
  });
  function mapStateToProps(decks){
    return {
      decks
      }
    }

export default connect(mapStateToProps)(ViewDeck)