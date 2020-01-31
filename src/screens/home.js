import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Disciplina from "../components/disciplina";
import { removeDisciplina } from "../redux/Disciplinas/action";
import { connect } from 'react-redux';
import HeaderSearchSwitch from '../components/headerSearchSwitch';

const HomeScreen = props => {

  const [search, setSearch] = useState('');

  const renderItem = ({ item, index }) => (

    <Disciplina
      nome={item.nome}
      qtAulas={item.qtAulas}
      qtFaltas={item.qtFaltas}
      percentualPresenca={item.percentualPresenca}
      onPress={() => props.navigation.navigate("Disciplina", { disciplina: item })}
      onLongPress={() => {
        removeDisciplina(index)
        Alert.alert('removido!: ')
      }}
    />
  );

  const { disciplinas, removeDisciplina } = props;
  return (
    <View style={{ flex: 1 }}>
      <HeaderSearchSwitch search={search} setSearch={setSearch} />

      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={disciplinas}
          renderItem={({ item, index }) => renderItem({ item, index })}
        />

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => props.navigation.navigate('AddDisciplina')}>
          <Icon name="md-add" size={30} color="black" />
        </TouchableOpacity>
      </View>
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

const mapDispatchToProps = dispatch => {
  return {
    removeDisciplina: (index) => {
      dispatch(removeDisciplina(index))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);