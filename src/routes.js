import React, { Component } from 'react'; 
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions:{
                header: null
            }
        },
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);