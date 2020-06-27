import { ADD_DECK, DELETE_DECK, RECEIVE_FLASHCARDS, RECEIVE_DECKS, ADD_FLASHCARD } from '../actions/index'
  
    export function decks(state = {}, action) {
     switch (action.type) {
      case RECEIVE_DECKS:
        return {
          ...state,
          ...action.decks
        }
      case ADD_DECK:
        return {
          ...state,
          [action.deck.id]: action.deck
        }     
      case DELETE_DECK:
        const copy = {}
        Object.assign(copy, state);
        delete(copy[action.deckId]);
        return copy;
  
      case RECEIVE_FLASHCARDS:
        return {
          ...state,
          [action.deckId]: {
            ...state[action.deckId],
            flashcards: action.flashcards,
          }
        }
  case ADD_FLASHCARD:
        return {
          ...state,
          [action.deckId]: {
            ...state[action.deckId],
            flashcards: {
              ...state[action.deckId].flashcards || {},
              [action.flashcard.id]: action.flashcard,
            }
          }
        }
        default:
          return state
    }
  }