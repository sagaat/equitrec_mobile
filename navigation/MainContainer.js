import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';

const Stack = createStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Note" component={NoteScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}