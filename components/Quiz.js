import React from 'react'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native'
import {purple, red, black, white } from '../utils/colors'
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import { Info } from './Info.js'


class Quiz extends React.Component {

	state={
		questionNumber: 0,
		showQuestion: false,
		correct: 0,
		incorrect: 0,
	}

showAnswer = () => (
	!this.state.showQuestion ? this.setState({ showQuestion: true })
	: this.setState({ showQuestion: false })
)

submitAnswer = (answer) => {

	const { questionNumber } = this.state
	const deck = this.props.navigation.state.params.entryId
	const decks = this.props.decks
	const correct = decks[deck].questions[questionNumber].correctAnswer.toLowerCase()

	if(answer.trim() === correct.trim()){
		this.setState({ correct: this.state.correct + 1 })
	}else {
		this.setState({ incorrect: this.state.incorrect + 1 })
	}
	this.setState({ questionNumber: this.state.questionNumber + 1, showQuestion: false })

}



	tryAgain = () => {
			this.setState({
				questionNumber: 0, 
				showQuestion: false,
				correct: 0,
				incorrect: 0,
			})
		}

	backBtn = () => {
		this.props.navigation.dispatch(NavigationActions.back({ key: null }))
	}	


	render(){
		const questionNumber = this.state.questionNumber
		const decks = this.props.decks
		const deck = this.props.navigation.state.params.entryId
		const number = this.state.questionNumber + 1

		if(questionNumber === decks[deck].questions.length){
			return (
				<View style={styles.container}>
					<View style={styles.card}>

					<View>
						<Text style={styles.mainText}>
              You got {this.state.correct} of {decks[deck].questions.length} right
             </Text>
             { this.state.correct > this.state.incorrect ? <Text style={{fontSize: 90}}></Text>
             : <Text style={{fontSize: 90}}></Text>}
					</View>
							<ActionButton styles={styles} text={'TryAgain'} color={purple} onPress={this.tryAgain}/>
							<ActionButton styles={styles} text={'Back'} color={red} onPress={this.backBtn}/>
					</View>
				</View>
			)
		}
		return(
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.top}>{number} of {decks[deck].questions.length}</Text>

          {!this.state.showQuestion
           ? <Text 
           style={styles.mainText}>{decks[deck].questions[questionNumber].question}
           </Text>
           : <Text 
           style={styles.mainText}>{decks[deck].questions[questionNumber].answer}
           </Text>}

          {!this.state.showQuestion 
          ? <Info style={styles.answer}
          text={'Show Answer'} 
          onPress={this.showAnswer}>

          </Info>
          : <Info 
          style={styles.answer} 
          text={'Show Question'}
           onPress={this.showAnswer}>
             </Info>}

					<View>
            <ActionButton 
            color={purple} styles={styles} text={'Correct'} 
            onPress={() => this.submitAnswer('true')}/>
            <ActionButton 
            color={red} styles={styles} text={'Incorrect'} 
            onPress={() => this.submitAnswer('false')}/>
					</View>
				</View>
			</View>
		)
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
    	color: "white",
    	fontSize: 26,
    	textAlign: 'center',
  },
 	 top: {
  		top: 0,
  		textAlign: 'center',
  		left: 150,
  		color: "white",
  		fontSize: 20,
  		margin: 5,
  		position: 'absolute',
  },
  	answer: {
  		color: "white",
  		fontSize: 20,
  		margin: 20,
  },
  card: {
    flex: 1,
	alignItems: "center",
	alignSelf: "stretch",
    backgroundColor: black,
    justifyContent: "center",
    margin: 8,
    height: 200,
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.34)",
    shadowOffset: {
      width: 20,
      height: 3,
    }, shadowRadius: 4, shadowOpacity: 1},
	mainText: {
		fontSize: 40,
		color: white,
		marginTop: 40,
		textAlign: 'center'
	}

})

function mapStateToProps(decks){
	return {
		decks
	}
}

export default connect(mapStateToProps)(Quiz)