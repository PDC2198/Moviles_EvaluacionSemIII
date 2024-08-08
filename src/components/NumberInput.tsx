import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface NumberInputProps {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
    title: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, placeholder, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        color: '#ffffff',
    },
    input: {
        height: 40,
        borderColor: '#afbf49',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#ffffff',
        backgroundColor: '#4c5776',
        borderRadius: 8,
    },
});

export default NumberInput;
