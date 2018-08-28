import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { green, white, gray } from '../utils/colors'

export default class AddCard extends React.Component {
  
  state = {
    question: '',
    answer:''
  }

  isDisabled = () => {
    return this.state.question==='' || this.state.answer===''
  }

  handleTextChange= (value , input) => {    
    if(input === 'question'){      
      this.setState(()=> ({
        question: value
      }))
    }else {
        this.setState(()=> ({
          answer: value
        }))
    }
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>        
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={ (text) => {this.handleTextChange(text, 'question') }}
          placeholder='Please enter your question'
        />
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={ (text) => {this.handleTextChange(text, 'answer') }}
          placeholder='Please enter the answer'
        />
        <TouchableOpacity disabled={ this.isDisabled() } style={styles.btn} onPress={() => console.log('Pressed!', this.state)}>
          <Text style={styles.btnText}>Submit</Text>
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
  btnText:{
    color: white
  },
  input:{
    width: 200,
    height: 44,
    padding: 8,
    margin: 25,
    borderWidth: 1,
    borderColor: gray

  }
});
