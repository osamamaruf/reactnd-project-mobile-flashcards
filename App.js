import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { blue, white } from './utils/colors'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'

const store = createStore(reducer, middleware)

export default class App extends React.Component {  

  componentDidMount(){
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content"/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs= createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',      
    },    
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',      
    }
  },
  } , {
    tabBarOptions: {
      style:{
        backgroundColor: blue
      }
    }
});

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    } 
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'UdaciCards',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,      
  },
});
