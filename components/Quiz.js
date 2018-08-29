import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { white, red, green } from '../utils/colors'

export default class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.questionTxt}>Quiz</Text>
        <View style={[styles.container, styles.mainContent]}>
          <Text>Question Text</Text>
          <TouchableOpacity 
            style={[styles.btn, styles.answerBtn]}
            onPress={() => console.log('Answer!')}>
            <Text style={ styles.btnAnswerText }>Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.btn, styles.addBtn]}
            onPress={() => console.log('Correct!')}>
            <Text style={ styles.btnText }>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.btn, styles.quizBtn]}
            onPress={() => console.log('Incorrect!')}>
            <Text style={ styles.btnText }>Incorrect</Text>          
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
  mainContent:{
    flex: 1    ,
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
  btnAnswerText:{
    color: red
  },
  answerBtn:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50 ,
    marginTop: 17,
    backgroundColor: 'transparent'
  },
  questionTxt:{
    padding: 10
  }
});
