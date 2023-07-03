import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';
import ScanScreen from './screens/ScanScreen';

const Stack = createStackNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Accueil" component={HomeScreen} />
                <Stack.Screen name="Evaluation" component={NoteScreen} />
                <Stack.Screen name="Scanner" component={ScanScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}