import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native'
import { orange, white, purple, red, green } from '../utils/colors'
import { SubmitButton } from './SubmitButton'
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import { addFlashcard, } from '../actions/index'
import { Info } from './Info.js'

class Quiz extends React.Component {

    state = {
     nextIndex: 0,
     correct: 0,
     incorrect: 0,
     showAnswer: false,
  }

  showAnswer = () => {

  }

  computeAccuracy = () => {
    const total = this.state.correct + this.state.incorrect;
    if (total === 0) return 0;

    return (this.state.correct * 100.0) / total;
  }

  handleCorrect = () => {
    this.setState((prevState) => ({
      nextIndex: prevState.nextIndex + 1,
      correct: prevState.correct + 1,
      showAnswer: false
    }));
  } 
  
  
  handleIncorrect = () => {
    this.setState((prevState) => ({
      nextIndex: prevState.nextIndex + 1,
      incorrect: prevState.incorrect + 1,
      showAnswer: false
    }));
  }

  handleRestartQuiz = () => {
    this.setState({
      nextIndex: 0,
      correct: 0,
      incorrect: 0,
      showAnswer: false,
    })
  }

  handleBackToDeck = () => {
    this.props.navigation.goBack();
  }



  renderCompleted = () => {
    const { deck } = this.props.navigation.state.params;
    return (
      <View  style={styles.container}>
        <View style={styles.card}>
          <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 20 }}>Quiz Completed!</Text>
          <View >
            <View style={styles.container}>
              <Text  style={styles.mainText}>You got: </Text>
              <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 20 }}>{this.state.correct} out of {Object.keys(deck.flashcards).length} right</Text>
            </View>
   
             <ActionButton styles={styles} text={'TryAgain'} color={green}  onPress={this.handleRestartQuiz}/>
			 <ActionButton styles={styles} text={'Back'} color={red}  onPress={this.handleBackToDeck}/>
          </View>

        </View>
      </View>
    );
  }

  renderFlashcard = () => {
        const { deck } = this.props.navigation.state.params;
       const flashcardIds = Object.keys(deck.flashcards);
         const flashcard = deck.flashcards[flashcardIds[this.state.nextIndex]];

      return (
        <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{ marginVertical: 20, textAlign: 'center', fontSize: 20, color: 'gray' }}>{this.state.nextIndex+1} of {flashcardIds.length}</Text>
          {this.state.showAnswer 
            ? <View>
				<Text style={{marginRight: "0%",  marginTop: 40, fontSize: 20, textAlign: 'center'}}>Answer: {this.state.showAnswer ? flashcard.answer : ' '}</Text>
                <Text style={{ marginTop: 80, marginRight: 0, textAlign: 'center', fontSize: 17,  color: 'darkslategray' }}>Flip Card to View Question</Text>
                
              </View>
            : <View>
                <Text style={{marginRight: "0%",  marginTop: 40, fontSize: 20, textAlign: 'center'}}>Question: {flashcard.question}</Text>
                <Text style={{ marginTop: 80, marginRight: 0, textAlign: 'center', fontSize: 17,  color: 'darkslategray' }}>Flip Card to View Answer</Text>
              </View>
          }

          
            <View style={{ marginTop: 40, borderRadius: 5, padding: 10 }}>
			<ActionButton color={purple} styles={styles} text={'Flip Card'} onPress={() => this.setState((prevState) => ({showAnswer: !prevState.showAnswer}))} />
            </View>
        </View>
        <View style={styles.lowerBtns}>
          <ActionButton color={green} styles={styles} text={'Correct'} onPress={this.handleCorrect} />
           

          <ActionButton color={red} styles={styles} text={'Incorrect'} onPress={this.handleIncorrect} />
        </View>
      </View>
    );
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const flashcardIds = Object.keys(deck.flashcards);

    if (flashcardIds.length === 0) {
      return (
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>No cards, Add cards to start quiz.</Text>
        </View>
      );
    }

    if (this.state.nextIndex >= flashcardIds.length) {
      return this.renderCompleted();
    } else {
      return this.renderFlashcard();
    }
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	},
	iosBtn: {
   		padding: 10,
   	    borderRadius: 7,
   	    height: 45,
    	margin: 5,
    	width: 160  
  },
  	submitBtnText: {
    	color: white,
    	fontSize: 26,
    	textAlign: 'center',
  },
 	 questions: {
  		top: 0,
  		alignSelf: 'flex-start',
  		left: 0,
  		color: white,
  		fontSize: 20,
  		margin: 5,
  		position: 'absolute',
  },
  	answer: {
  		color: white,
  		fontSize: 20,
  		margin: 20,
  },
 	 card: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		margin: 10,
		backgroundColor: orange,
		alignSelf: 'stretch',
		borderRadius: 10,
		shadowColor: 'rgba(0,0,0,0.34)',
        shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 4,
      shadowOpacity: 1
	},
	mainText: {
		fontSize: 40,
		color: white,
		marginTop: 40,
		textAlign: 'center'
	},
	lowerBtns: { 
		flex: 1, 
		justifyContent: 'flex-end', 
		paddingHorizontal: 50, 
		paddingVertical: 100 
	}
})

export default connect()(Quiz)