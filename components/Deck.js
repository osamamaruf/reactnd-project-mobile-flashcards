import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Deck extends React.Component {
  render() {
    const { title, cardCount } = this.props
    return (
      <View style={styles.container}>
        <Text>{ title }</Text>
        <Text>{ cardCount } cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
