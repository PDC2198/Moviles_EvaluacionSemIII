import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Este es el componente Button
interface ButtonProps {
    title: string;  // Texto que se muestra en el botón
    onPress: () => void;  // Función que se ejecuta al presionar el botón
    style?: ViewStyle;  // Estilo adicional para el botón
    textStyle?: TextStyle;  // Estilo adicional para el texto del botón
}

// Componente de botón simple
const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]} activeOpacity={0.7}>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

// Estilos básicos para el botón
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#afbf49',  // Color de fondo del botón
        paddingVertical: 10,  // Espaciado vertical dentro del botón
        paddingHorizontal: 30,  // Espaciado horizontal dentro del botón
        borderRadius: 8,  // Bordes redondeados del botón
        alignItems: 'center',  // Alinea el texto en el centro
    },
    buttonText: {
        fontSize: 16,  // Tamaño del texto
        color: '#ffffff',  // Color del texto
        fontWeight: 'bold',  // Negrita en el texto
    },
});

export default Button;
