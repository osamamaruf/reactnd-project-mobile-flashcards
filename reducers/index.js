import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
    switch (action.type) {
      case RECEIVE_DECKS :
        return {
          ...state,
          ...action.decks,
        }
      case ADD_DECK :
        return {
          ...state,
          ...action.deck
        }
      case ADD_CARD :
        const { question, answer } = action.card
        return {          
          ...state,
          [action.title]: {
                    ...state[action.title],
                    questions: state[action.title].questions.concat({
                        question,
                        answer
                      })
            }
        }
      default :
        return state
    }
  }
  
export default decks 