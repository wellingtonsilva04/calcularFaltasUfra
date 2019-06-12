import React, { Component } from 'react';
import { View,Text, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from "react-native-elements";

export default class InserirDisciplina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeDisciplina: "",
      numeroFaltas: 0,
      numeroAulas: 0,
      messageError: false
    };
  }
  calcularPorcentagem = ()=>{
    const {nomeDisciplina,numeroAulas,numeroFaltas} = this.state;
    if (nomeDisciplina === ""){
      this.setState({messageError: true})
    }
    const porcentagem = numeroFaltas / numeroAulas
    const { navigation } = this.props;
    const  setDisciplina = navigation.getParam('setDisciplina', 'NO-ID');
    setDisciplina({nomeDisciplina,numeroAulas,numeroFaltas,percentualPresenca: porcentagem})
    navigation.goBack();
    

  }
  render() {
    const {messageError,nomeDisciplina,numeroAulas,numeroFaltas} = this.state;
    return (
      <KeyboardAvoidingView style={{marginHorizontal: 10,}} behavior="padding" enabled>
        
        <Input
          containerStyle={{marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          inputContainerStyle={{borderBottomWidth: 0,marginHorizontal: 10, }}
          errorMessage= {messageError ? "* Escolha um nome pra disciplina":"" }
          
          onChangeText={(text) => this.setState({ nomeDisciplina: text })}
          placeholder={"Disciplina"}
        />
        <Input
          containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          keyboardType='numeric'
          inputContainerStyle={{ borderBottomWidth: 0 }}
          onChangeText={(text) => this.setState({ numeroAulas: parseInt(text) })}
          placeholder={"Quantidade de Aulas"} />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          keyboardType='numeric'
          containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          onChangeText={(text) => this.setState({ numeroFaltas: parseInt(text) })}
          placeholder={"Quantidade de Faltas"}
          underlineColorAndroid="transparent" />

        <Button
          containerStyle={{ width: '90%', margin: 20, }}
          buttonStyle={{ backgroundColor: "gray", borderRadius: 10, }}
          title="Enviar"
          titleStyle={{ fontSize: 20 }}
          onPress={() => this.calcularPorcentagem()} />

      </KeyboardAvoidingView>
    );
  }
}
