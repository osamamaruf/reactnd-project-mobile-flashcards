import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
});