import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => (
    <View>
        <Text style={{ textAlign: 'center', marginTop: 10 }}>© 2024 To-Do App</Text>
    </View>
);


const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
    },
});

export default MainLayout;
