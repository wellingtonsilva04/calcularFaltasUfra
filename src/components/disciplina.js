import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Disciplina = props => {

  const { onPress, onLongPress, nome, qtFaltas, qtAulas, percentualPresenca } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ ...styles.container, backgroundColor: percentualPresenca < 75 ? "#f09090" : "white" }}>
      <Text style={styles.textNome}>{nome}</Text>
      <Text style={styles.textQtAulas}>{`F: ${qtFaltas}/${qtAulas}`}</Text>
      <Text style={styles.textPercentualPresenca}>P: {percentualPresenca}%</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d8d7d7",
    marginBottom: 5,
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

export default Disciplina;