import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackScreen: React.FC<{ route: any }> = ({ route }) => {
    const { email, password, comentario } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>FEEDBACK DEL FORMULARIO</Text>
            <Text style={styles.label}>Email: {email}</Text>
            <Text style={styles.label}>Contraseña: {password}</Text>
            <Text style={styles.label}>Comentario: {comentario}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c5776',
        padding: 18,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#11eac6',
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 10,
    },
});

export default FeedbackScreen;
