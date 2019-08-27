import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Disciplina extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { onPress, nome, qtFaltas,qtAulas, percentualPresenca } = this.props;
    console.log(qtFaltas);
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{...styles.container,backgroundColor: percentualPresenca < 75 ? "#db787a":"white"}}>
        <Text style={styles.textNome}>{nome}</Text>
        <Text style={styles.textQtAulas}>{`F: ${qtFaltas}/${qtAulas}`}</Text>
        <Text style={styles.textPercentualPresenca}>P: {percentualPresenca}%</Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccccc",
    marginBottom: StyleSheet.hairlineWidth,
    backgroundColor: "white",
  },
  textNome: {
    flex: 6,
    fontWeight: 'bold',
    fontSize: 20
  },
  textQtAulas: {
    fontSize: 16, marginHorizontal: 5,
  },
  textPercentualPresenca: {
    marginHorizontal: 5,
    fontSize: 16

  }
})
