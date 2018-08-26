import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = 'UdaciCards:decks'



 function setDummyData () {    
  
    let dummyData = {
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
  
  
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  
    return dummyData
  }
  
  export function getDecks () {
    return new Promise((res, rej) => {
      setTimeout(() => res(AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse)), 1000)
    })
  }

  export function getDeck (id) {
    return new Promise((res, rej) => {
      setTimeout(() => res(AsyncStorage.getItem(DECKS_STORAGE_KEY).
            then((data)=>{
                let results = JSON.parse(data)
                return results[id]
            })), 1000)
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
        AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
            [deckTitle]: deck
          }))        
  
        res(deck)
      }, 1000)
    })
  }


  export function addCardToDeck (title, {question, answer}) {
    return new Promise((res, rej) => {              
  
      setTimeout(() => {
        AsyncStorage.getItem(DECKS_STORAGE_KEY).
            then((data)=>{
                let results = JSON.parse(data)                
                let newDecks = {
                    ...results,
                    [title]: {
                        ...results[title],
                        questions: results[title].questions.concat({question, answer})
                    }
                }
                AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDecks))                  

            })        
  
        res()
      }, 1000)
    })
  }