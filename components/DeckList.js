import React from 'react';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { handleInitialData } from '../utils/api'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Deck from './Deck'

class DeckList extends React.Component {
  state = {      
    ready : false
  } 
  
  componentDidMount(){
    const { dispatch } = this.props

    handleInitialData()
      .then((decks) => dispatch(receiveDecks(decks)))      
      .then(() => this.setState(() => ({ready: true})))
  }

  renderItem = ({ item })=>{
    return <Deck title={item.title} cardCount={item.questions.length}/>
  }

  render() {
    const { decks } = this.props
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
});

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)