let decks = {
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
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }


  export function getDecks () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...decks}), 1000)
    })
  }

  export function getDeck (id) {
    return new Promise((res, rej) => {
      setTimeout(() => res(decks[id]), 1000)
    })
  }

  function createDeck (title){
    return {
        title,
        questions: []
    }
  }

  export function saveDeckTitle (deckTitle) {
    return new Promise((res, rej) => {     
      const deck = createDeck(deckTitle)       
  
      setTimeout(() => {
        decks = {
          ...decks,
          [deckTitle]: deck
        }        
  
        res(deck)
      }, 1000)
    })
  }


  export function addCardToDeck (title, {question, answer}) {
    return new Promise((res, rej) => {              
  
      setTimeout(() => {
        decks = {
          ...decks,
          [title]: {
              ...decks[title],
              questions: decks[title].questions.concat({question, answer})
          }
        }        
  
        res()
      }, 1000)
    })
  }