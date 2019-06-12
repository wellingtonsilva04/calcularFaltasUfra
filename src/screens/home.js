import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Disciplina from "../components/disciplina";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [
        { id: 1, nome: "BDII", qtFaltas: 5, qtAulas: 10, percentualPresenca: 80 },
        { id: 2, nome: "Redes", qtFaltas: 5, qtAulas: 15, percentualPresenca: 78 }

      ]
    };
  }
  _renderItem = (item) => (
    <Disciplina
      nome={item.nome}
      qtAulas={item.qtAulas}
      percentualPresenca={item.percentualPresenca}
      onPress={() => ({})}
    />

  )

  setDisciplina = (disciplina) =>{
    const {disciplinas} = this.state;
    console.log(disciplina);
    this.setState({disciplinas:[...disciplinas,disciplina]});

  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item,index) => index.toString()}
          data={this.state.disciplinas}
          renderItem={({ item }) => this._renderItem(item)}

        />

        <View style={styles.viewbotaoAdd}>
          <TouchableOpacity
            style={styles.botaoAdicionar}
            onPress={() => this.props.navigation.navigate('AddDisciplina',{setDisciplina: this.setDisciplina})}>
            <Icon name="md-add" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D7D6D6',
  },
  viewbotaoAdd: {
    alignSelf: 'flex-end',
    padding: 20
  },
  botaoAdicionar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25
  }
});
