export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'


export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard (card) {
    return {
        type: ADD_CARD_TO_DECK,
        card
    }
}

export function receiveDeck (decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
} 

export function deleteDeck(deckId) {
  return {
    type: DELETE_DECK,
    deckId
}
}

export function handleDeleteDeck (key) {
  return (dispatch) => {
    return removeDeck(key)
    .then((decks) => {
      dispatch(getAllDecks(decks))
    })
  }
}