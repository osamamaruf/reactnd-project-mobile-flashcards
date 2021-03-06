import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { green, white, gray } from '../utils/colors'
import { addDeck } from '../actions'
import { StackActions, NavigationActions } from 'react-navigation';


class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleTextChange= (title) => {    
    this.setState(()=> ({
      title
    }))
  }


  handleSubmit = () => {
    const { title } = this.state
    const { dispatch } = this.props

    dispatch(addDeck({    
      [title] : {
        title,
        questions: []
      }      
    }))

    this.setState(()=> ({
      title: '',      
    }))

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'DeckDetail' , params : { key : title }}),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  isDisabled = () => {
    return this.state.title===''
  }
  
  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity 
          disabled={ this.isDisabled() } 
          style={this.isDisabled() ? [styles.btn,styles.disabledBtn] : styles.btn}
          onPress={() => this.handleSubmit()}>
          <Text style={styles.btnText}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    backgroundColor: green
  },
  disabledBtn:{
    backgroundColor: gray
  },         
  btnText:{
    color: white
  },
  input:{
    width: 200,
    height: 44,
    padding: 8,
    margin: 50,
    borderWidth: 1,
    borderColor: gray

  }
});

export default connect()(NewDeck)