import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { white, red, green } from '../utils/colors'
import { connect } from 'react-redux'

class Quiz extends React.Component {
  
  state = {
    index: 0,
    card:'question'
  }

  toggleCard = () => {
    this.setState((prevState)=>{      
      return {
        card: prevState.card ==='question'? 'answer' : 'question'
      }      
      
    })
  }

  render() {
    const { deck } = this.props   
    const { questions } = deck
    const { index, card } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.questionTxt}>{index + 1}/{questions.length}</Text>
        <View style={[styles.container, styles.mainContent]}>
          <Text>{ card==='question'? questions[index].question : questions[index].answer}</Text>
          <TouchableOpacity 
            style={[styles.btn, styles.answerBtn]}
            onPress={() => this.toggleCard()}>
            <Text style={ styles.btnAnswerText }>{ card==='question'? 'Answer' : 'Question'}</Text>
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

function mapStateToProps (decks, ownProps) {
  return {
    deck : decks[ownProps.navigation.state.params.key]
  }
}

export default connect(mapStateToProps)(Quiz)