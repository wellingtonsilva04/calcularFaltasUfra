import React, { Component } from 'react';
import { View,Text, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from "react-native-elements";
import {setDisciplina  } from "../redux/Disciplinas/action";
import { connect } from 'react-redux';


class InserirDisciplina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      qtFaltas: 0,
      qtAulas: 0,
      messageError: false
    };
  }
  
  calcularPorcentagem = ()=>{
    const {nome,qtAulas,qtFaltas} = this.state;
    if (nome === ""){
      this.setState({messageError: true})
    }
    let porcentagem = (qtAulas - qtFaltas) / qtAulas;
    porcentagem = porcentagem * 100;
    console.log(porcentagem);

    const { navigation, setDisciplina } = this.props;
    setDisciplina({nome,qtAulas,qtFaltas,percentualPresenca: porcentagem.toFixed(2)})
    navigation.goBack();
    

  }
  render() {
    const {messageError,nome,qtAulas,qtFaltas} = this.state;
    
    return (
      <KeyboardAvoidingView style={{marginHorizontal: 10,}} behavior="padding" enabled>
        
        <Input
          containerStyle={{marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          inputContainerStyle={{borderBottomWidth: 0,marginHorizontal: 10, }}
          errorMessage= {messageError ? "* Escolha um nome pra disciplina":"" }
          
          onChangeText={(text) => this.setState({ nome: text })}
          placeholder={"Disciplina"}
        />
        <Input
          containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          keyboardType='numeric'
          inputContainerStyle={{ borderBottomWidth: 0 }}
          onChangeText={(text) => this.setState({ qtAulas: parseInt(text) })}
          placeholder={"Quantidade de Aulas"} />
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          keyboardType='numeric'
          containerStyle={{ marginVertical: 5, borderWidth: 1, borderRadius: 10, padding: 5, }}
          onChangeText={(text) => this.setState({ qtFaltas: parseInt(text) })}
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


const mapDispatchToProps = dispatch => {
  return {
    setDisciplina: (disciplina) => {
      dispatch(setDisciplina(disciplina))
    }

  }
}

export default connect(null,mapDispatchToProps)(InserirDisciplina);