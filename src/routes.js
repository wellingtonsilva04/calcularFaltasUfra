import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/home";
import AddDisciplina from "./screens/inserirDisciplina"
import Disciplina from './screens/DisciplinaSceen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Disciplina: {
      screen: Disciplina,
      navigationOptions: ({ navigation }) => {

        return {
          headerTitle: `${navigation.state.params.disciplina.nome}`,

          headerRight: null
        }
      }
    },
    AddDisciplina: {
      screen: AddDisciplina,
      navigationOptions: {
        title: 'Nova Disciplina'
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);