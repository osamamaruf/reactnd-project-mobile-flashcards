import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { green, white, gray } from '../utils/colors'

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  handleTextChange= (title) => {    
    this.setState(()=> ({
      title
    }))
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
        <TouchableOpacity disabled={ this.isDisabled() } style={styles.btn} onPress={() => console.log(title)}>
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
    margin: 50,
    borderWidth: 1,
    borderColor: gray

  }
});

export default connect()(NewDeck)