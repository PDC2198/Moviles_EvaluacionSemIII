import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';

const Form1Screen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const handleCalculate = () => {
        if (!num1 || !num2) {
            Alert.alert('Error', 'Todos los campos son requeridos');
            return;
        }

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            Alert.alert('Error', 'Por favor ingresa números válidos');
            return;
        }

        if (number1 === number2) {
            setResult('Los números son iguales.');
        } else {
            const greater = number1 > number2 ? number1 : number2;
            setResult(`Número mayor: ${greater}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>COMPARA TUS NÚMEROS</Text>

            <CustomTextInput
                value={num1}
                onChange={setNum1}
                placeholder="Primer número"
                title="Número 1:"
            />

            <CustomTextInput
                value={num2}
                onChange={setNum2}
                placeholder="Segundo número"
                title="Número 2:"
            />

            <Button title="COMPARAR" onPress={handleCalculate} color="#afbf49" />

            {result !== null && (
                <Text style={styles.result}>{result}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#4c5776',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
});

export default Form1Screen;
