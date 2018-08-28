import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Deck from './Deck'
import { white, red, green } from '../utils/colors'

class DeckDetail extends React.Component {
  render() {
    const { deck } = this.props 
    return (
      <View style={styles.container}>
        <View style={styles.deck}> 
          <Deck title={deck.title} cardCount={deck.questions.length}/>
        </View>
        <TouchableOpacity 
          style={[styles.btn, styles.addBtn]}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { key: deck.title }
          )}>
          <Text style={ styles.btnText }>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.btn, styles.quizBtn]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { key: deck.title }
          )}>
          <Text style={ styles.btnText }>Start Quiz</Text>          
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50 ,
    marginTop: 17,
  },
  addBtn: {
    backgroundColor: green
  },
  quizBtn:{
    backgroundColor: red
  }, 
  btnText:{
    color: white
  },  
  deck: {
    width: 300,
    height: 250,
    backgroundColor: white,
    borderRadius: 2,
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
  }
});


function mapStateToProps (decks, ownProps) {
  return {
    deck : decks[ownProps.navigation.state.params.key]
  }
}

export default connect(mapStateToProps)(DeckDetail)