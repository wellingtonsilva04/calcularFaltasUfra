import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Disciplina extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        const disciplina = navigation.getParam('disciplina', 'NO-ID');
        const { nome,qtAulas,qtFaltas,percentualPresenca } = disciplina;
        return (
            <View style={styles.container}>
                <Text style={styles.textNome}>Status: {percentualPresenca > 75 ? "Aprovado": "Reprovado"}</Text>
                <Text style={styles.textoutrosDados}>{`Quantidade de Faltas: ${qtFaltas}`}</Text>
                <Text style={styles.textoutrosDados}>{`Quantidade de Aulas: ${qtAulas}`}</Text>
                <Text style={{...styles.textoutrosDados,color: percentualPresenca < 75 ? "#ff4c4c":"white"}}>{`Percentual de Preseça: ${percentualPresenca}`}%</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 60,
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: "white",
    },
    textNome: {
      fontWeight: 'bold',
      fontSize: 32,
      alignSelf: 'center',
    },
    textoutrosDados: {
      fontSize: 22, 
      margin:5
    },
   
  })
