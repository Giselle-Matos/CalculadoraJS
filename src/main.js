import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {styles} from "./style"


export function Calculadora() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const Soma = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);
        const resultado = num1 + num2;

        setResultado(resultado.toString());
    }
    const Subtracao = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        const resultado = num1 - num2;

        setResultado(resultado.toString());
    }

    const Multiplicacao = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);
        const resultado = num1 * num2;

        setResultado(resultado.toString());
    }
    const Divisao = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);
        const resultado = num1 / num2;

        setResultado(resultado.toString());
    }

    return (
        <View style={styles.container}>
            <View style = {styles.titleView}>
                <Text style={styles.titulo}> Calculadora</Text>
            </View>
            <View style = {styles.content}>
                <View style = {styles.inputsParentView}>
                    <View >
                        <TextInput
                        style = {styles.input}
                        keyboardType="numeric"
                        placeholder = "Digite um numero"
                        value = {numero1}
                        onChangeText = {(valor)=> setNumero1(valor)}
                        />
                    </View>
                    <View>
                        <TextInput
                        style = {styles.input}
                        keyboardType="numeric"
                        placeholder = "Digite outro numero"
                        value = {numero2}
                        onChangeText = {(valor)=> setNumero2(valor)}
                        />
                    </View>
                </View>

                <View style = {styles.buttonView}>
                    <TouchableOpacity style = {styles.button} onPress = {Soma}>
                        <Text style = {styles.buttonText}>Somar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {Subtracao}>
                        <Text style = {styles.buttonText}>Subtrair</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {Divisao}>
                        <Text style = {styles.buttonText}>Dividir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {Multiplicacao}>
                        <Text style = {styles.buttonText}>Multiplicar</Text>
                    </TouchableOpacity>
                </View>
                <View  style = {{flexDirection: "row", marginTop: 20}}>
                    <Text style = {{fontSize: 20}}>Resultado: </Text>
                    <Text style = {styles.result}>{resultado}</Text>
                </View>
                
            </View>
        </View>
    );
};

