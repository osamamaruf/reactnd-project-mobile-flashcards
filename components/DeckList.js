import React from 'react';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { handleInitialData } from '../utils/api'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import Deck from './Deck'
import { AppLoading} from 'expo'
import { white } from '../utils/colors'

class DeckList extends React.Component { 
  state = {
    ready: false,
  }
  componentDidMount(){
    const { dispatch } = this.props

    handleInitialData()
      .then((decks) => dispatch(receiveDecks(decks)))      
      .then(() => this.setState(() => ({ready: true})))
  }

  renderItem = ({ item })=>{
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
              'DeckDetail',
              { key: item.title }
            )}> 
          <Deck title={item.title} cardCount={item.questions.length}/>
        </TouchableOpacity>
      </View>
      )
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>  
        <FlatList 
          data={ Object.keys(decks).map((deck) => {return  decks[deck] })  }
          renderItem={ this.renderItem }
        />                   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  }, 
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
});

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)