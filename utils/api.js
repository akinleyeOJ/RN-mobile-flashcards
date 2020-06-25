import {AsyncStorage} from "react-native"
const FLASHCARDS_STORAGE_KEY = "flashcards: decks"

const initialData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    Redux: {
      title: 'Redux',
      questions: [
        {
          question: 'What is Redux?',
          answer: 'A predictable state container for JavaScript Apps'
        },
        {
          question: 'What is an action creator?',
          answer:
            'It is a function that takes an input and returns an object with a type and data property.'
        },
        {
          question: 'What is a reducer?',
          answer:
            'A reducer is a pure function that takes the current state and action and returns the next state.'
        }
      ]
    }
  };

  export const getData = () => { 
    return initialData
  }

    export function getDecks (deck) {
      return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(results => {
      if(results === null) {
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
      }else {
        return JSON.parse(results)
      }
      })
    }

    export function saveDeckTitle(title){
      return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title: title,
          questions: []
        }
      }
   ))
    }

    export function addCardToDeck(name, card){
      return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
      .then(results => JSON.parse(results))
      .then(results=> {
        results[name].questions.push(card)
        AsyncStorage.settItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results))
          return results
      })
    }
