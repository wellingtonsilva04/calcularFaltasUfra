import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home";
import AddDisciplina from "./screens/inserirDisciplina"

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions:{
                header: null
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