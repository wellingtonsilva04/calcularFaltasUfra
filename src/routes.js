import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home";
import AddDisciplina from "./screens/inserirDisciplina"
import Disciplina from './screens/Disciplina';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions:{
                header: null
            }
        },
        Disciplina:{
            screen: Disciplina,
            navigationOptions: ({ navigation }) => {

                return {
                  headerTitle: `${navigation.state.params.disciplina.nome}`,
        
                  headerRight: null
                }
              }
        },
        AddDisciplina:{
            screen: AddDisciplina,
            navigationOptions:{
                title: 'Nova Disciplina'
            }
        }
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);