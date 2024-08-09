import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TextInputProps {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
    title: string;
}

const CustomTextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                keyboardType="numeric"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 16,
        color: 'white',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: 'white',
    },
});

export default CustomTextInput;
