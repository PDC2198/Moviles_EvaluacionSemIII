import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

const Image1Screen: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.date}>Estás en Imagen 1</Text>
            </View>

            <Image
                source={{ uri: '/assets/logosamhu.png' }}
                style={styles.image}
            />

            <Text style={styles.description}>Esta es la imágen Nro. 1</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c5776',
        padding: 16,
    },
    header: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 40 : 20,
        left: 20,
        backgroundColor: '#e9ecef',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    date: {
        fontSize: 16,
        color: '#343a40',
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    description: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default Image1Screen;
