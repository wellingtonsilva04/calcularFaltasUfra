import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Input, Button } from "react-native-elements";
import { setDisciplina } from "../redux/Disciplinas/action";
import { connect } from 'react-redux';

const InserirDisciplina = props => {

  const [nome, setNome] = useState("");
  const [qtFaltas, setQtfaltas] = useState(0);
  const [qtAulas, setQtAulas] = useState(0);
  const [messageError, setMessageError] = useState(false);

  const calcularPorcentagem = () => {
    if (nome === "") {
      setMessageError(true);
    }
    let porcentagem = (qtAulas - qtFaltas) / qtAulas;
    porcentagem = porcentagem * 100;

    const { navigation, setDisciplina } = props;
    setDisciplina({ nome, qtAulas, qtFaltas, percentualPresenca: porcentagem.toFixed(2) })
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={{ marginHorizontal: 10, }} behavior="padding" enabled>
      <Input
        containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
        inputContainerStyle={{ borderBottomWidth: 0, marginHorizontal: 10, }}
        errorMessage={messageError ? "* Escolha um nome pra disciplina" : ""}
        onChangeText={(text) => setNome(text)}
        placeholder={"Disciplina"}
      />
      <Input
        containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
        keyboardType='numeric'
        inputContainerStyle={{ borderBottomWidth: 0 }}
        onChangeText={(text) => setQtAulas(parseInt(text))}
        placeholder={"Quantidade de Aulas"}
      />
      <Input
        inputContainerStyle={{ borderBottomWidth: 0 }}
        keyboardType='numeric'
        containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
        onChangeText={(text) => setQtfaltas(parseInt(text))}
        placeholder={"Quantidade de Faltas"}
        underlineColorAndroid="transparent"
      />

      <Button
        containerStyle={{ width: '90%', margin: 20, }}
        buttonStyle={{ backgroundColor: "gray", borderRadius: 10, }}
        title="Enviar"
        titleStyle={{ fontSize: 20 }}
        onPress={() => calcularPorcentagem()}
      />

    </KeyboardAvoidingView>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setDisciplina: (disciplina) => {
      dispatch(setDisciplina(disciplina))
    }

  }
}

export default connect(null, mapDispatchToProps)(InserirDisciplina);