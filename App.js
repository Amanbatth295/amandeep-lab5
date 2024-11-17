import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: { backgroundColor: '#f4f4f4', width: 240 },
                    drawerLabelStyle: { fontWeight: 'bold' },
                    drawerActiveTintColor: '#6200EE',
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
