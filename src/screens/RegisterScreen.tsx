import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        if (!name || !surname || !email) {
            Alert.alert('Error', 'Todos los campos son requeridos');
            return;
        }
        //usuario registrado
        Alert.alert('Usuario registrado');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={surname}
                onChangeText={setSurname}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button title="Registrar" onPress={handleRegister} />
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
    },
    input: {
        height: 40,
        borderColor: 'afbf49',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default RegisterScreen;
