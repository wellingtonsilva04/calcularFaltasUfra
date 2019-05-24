import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Disciplina extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.textNome}>{this.props.nome}</Text>
        <Text style={styles.textQtAulas}>{this.props.qtAulas}</Text>
        <Text style={styles.textPercentualPresenca}>{this.props.percentualPresenca}%</Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccccc",
    marginBottom: StyleSheet.hairlineWidth,
    backgroundColor: "white",
  },
  textNome: {
    flex: 8,
    fontWeight: 'bold',
    fontSize: 18
  },
  textQtAulas: {
    flex: 1,
    fontSize: 14
  },
  textPercentualPresenca: {
    flex: 2,
    fontSize: 14

  }
})
