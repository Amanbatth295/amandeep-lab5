import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ToDoForm = () => {
    return (
        <View>
            <Text>Add a To-Do:</Text>
            <TextInput placeholder="Enter a task" style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
            <Button title="Add Task" onPress={() => alert('Task added')} />
        </View>
    );
};

export default ToDoForm;
