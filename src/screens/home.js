import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Disciplina from "../components/disciplina";
import { connect } from 'react-redux';

const HomeScreen = props => {

  _renderItem = (item) => (
    <Disciplina
      nome={item.nome}
      qtAulas={item.qtAulas}
      qtFaltas={item.qtFaltas}
      percentualPresenca={item.percentualPresenca}
      onPress={() => props.navigation.navigate("Disciplina", { disciplina: item })}
    />

  );

  const { disciplinas } = props;
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={disciplinas}
        renderItem={({ item }) => _renderItem(item)}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => props.navigation.navigate('AddDisciplina')}>
        <Icon name="md-add" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 5,
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
  botaoAdicionar: {
    position: "absolute",
    bottom: 20,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#dbd9d9",
    backgroundColor: "white",
    height: 50,
    width: 50,
  }
});


const mapStateToProps = state => {
  const { disciplinas } = state.disciplinasReducer;

  return {
    disciplinas
  }
}


export default connect(mapStateToProps)(HomeScreen);