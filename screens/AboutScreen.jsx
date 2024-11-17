import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handlePressName = () => {
        setShowMessage(!showMessage);
    };

    return (
        <MainLayout>
            <Text style={styles.title}>About the App</Text>
            <TouchableOpacity onPress={handlePressName}>
                <Text style={styles.name}>Developer: Amandeep Singh</Text>
            </TouchableOpacity>
            {showMessage && <Text style={styles.easterEgg}>Surprise! You found the Easter egg! 🎉</Text>}
            <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    easterEgg: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        color: 'green',
    },
    date: {
        marginTop: 20,
        fontSize: 14,
        color: 'gray',
    },
});

export default AboutScreen;
