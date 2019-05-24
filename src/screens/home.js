import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Disciplina from "../components/disciplina";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [
        { id: 1,nome: "BDII", qtFaltas: 5, qtAulas: 10, percentualPresenca: 80 },
        { id: 2, nome: "Redes", qtFaltas: 5, qtAulas: 15, percentualPresenca: 78 }
    
    ]
    };
  }
  _renderItem = (item) => (
    <Disciplina
      nome={item.nome}
      percentualPresenca = {item.percentualPresenca}
      onPress = {() =>({})}

    />

  )
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        keyExtractor = {(item) => item.id.toString()}
          data={this.state.disciplinas}
          renderItem={({ item }) => this._renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
