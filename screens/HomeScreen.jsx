import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const HomeScreen = ({ navigation }) => {
    return (
        <MainLayout>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <ToDoForm />
            <ToDoList />
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;
