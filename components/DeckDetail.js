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
        <Deck title={deck.title} cardCount={deck.questions.length}/>
        <TouchableOpacity 
          style={[styles.btn, styles.addBtn]}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { key: deck.title }
          )}
        >
          <Text style={ styles.btnText }>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.btn, styles.quizBtn]}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { key: deck.title }
          )}
        >
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
    paddingRight: 50   
  },
  addBtn: {
    backgroundColor: green
  },
  quizBtn:{
    backgroundColor: red
  }, 
  btnText:{
    color: white
  }
});


function mapStateToProps (decks, ownProps) {
  return {
    deck : decks[ownProps.navigation.state.params.key]
  }
}

export default connect(mapStateToProps)(DeckDetail)