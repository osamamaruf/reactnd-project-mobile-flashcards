import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { blue } from '../utils/colors'
import {    
    clearLocalNotification,
    setLocalNotification
} from '../utils/helpers'

class QuizResult extends React.Component {
    
    componentDidMount(){
        clearLocalNotification()
        .then(setLocalNotification)
    }

    render(){
        const { correctResults, totalQuestions } = this.props
        const percentage =  ((correctResults/totalQuestions) * 100).toFixed(2)
    
        return (
        <View style={styles.container}>
            <Text style={styles.questionTxt}>{totalQuestions}/{totalQuestions}</Text>
            <View style={[styles.mainContent]}>
            <Text style={styles.header}>Your Score</Text>  
            <Text style={styles.percentage}>{ percentage } % </Text>                              
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'        
    },
    mainContent:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },   
    questionTxt:{
        padding: 10
    },
    header: {
        fontSize: 35,
        textAlign: 'center',
    },
    percentage: {
        color: blue,
        fontSize: 60,
        textAlign: 'center',
    },
})  

export default QuizResult;
