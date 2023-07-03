import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NoteScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Note !</Text>
            <Text>Notez le cavalier !</Text>
            <Button
                title="Go to Accueil"
                onPress={() => navigation.navigate('Accueil')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});