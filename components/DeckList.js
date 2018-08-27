import React from 'react';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { handleInitialData } from '../utils/api'
import { StyleSheet, Text, View } from 'react-native';

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

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.decks)}</Text>
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