import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function QuizResult (props) {
    const { correctResults, totalQuestions } = props
    const percentage =  ((correctResults/totalQuestions) * 100).toFixed(2)
    
    return (
      <View style={styles.container}>
        <Text style={styles.questionTxt}>{totalQuestions}/{totalQuestions}</Text>
        <View style={[styles.container, styles.mainContent]}>
          <Text> Your Score { percentage } % </Text>                              
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,    
    },
    mainContent:{
        flex: 1    ,
        alignItems: 'center',
        justifyContent: 'center',
    },   
    questionTxt:{
        padding: 10
    }
})  

export default QuizResult;
