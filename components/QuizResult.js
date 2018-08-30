import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { blue, white } from '../utils/colors'
import {    
    clearLocalNotification,
    setLocalNotification
} from '../utils/helpers'
import { StackActions, NavigationActions } from 'react-navigation'

class QuizResult extends React.Component {
    
    componentDidMount(){
        clearLocalNotification()
        .then(setLocalNotification)
    }

    backToDeck = () => {
        this.props.navigation.goBack();
    }

    restartQuiz = () => {

        const { title } = this.props

        const resetAction = StackActions.reset({
            index: 2,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({ routeName: 'DeckDetail' , params : { key : title }}),
              NavigationActions.navigate({ routeName: 'Quiz' , params : { key : title }}),
            ],
          });
      
        this.props.navigation.dispatch(resetAction);
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
            <View style={styles.btnContainer}>                
                    <TouchableOpacity 
                        style={styles.btn}            
                        onPress={() => this.restartQuiz()}>
                        <Text style={styles.btnText}>Restart Quiz</Text>
                    </TouchableOpacity>                                
                    <TouchableOpacity   
                        style={styles.btn}          
                        onPress={() => this.backToDeck()}>
                        <Text style={styles.btnText}>Back to Deck</Text>
                    </TouchableOpacity>                
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
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: blue,
    },
    btn: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    },
    btnText:{
        color: white
    },
})  


export default QuizResult;
