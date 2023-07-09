import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NoteScreen({ route }) {
    const { scannedData } = route.params;

    return (
        <View style={styles.container}>
            <Text>Note !</Text>
            <Text>Notez le cavalier !</Text>
            <Text>Scanned Data: {scannedData}</Text>
            <Button
                title="Enregistrer la note"
                onPress={() => navigation.navigate('Note')}
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