import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Accueil !</Text>
            <Text>Scannez le QR Code de la compétition !</Text>
            <Button
                title="Go to Note"
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