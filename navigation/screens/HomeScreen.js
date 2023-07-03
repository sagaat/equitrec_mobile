import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.containerLogo} disabled={true}>
                <Image source={require('../../img/Logo_Federation_Française_Equitation.png')} style={styles.logo} />
            </TouchableOpacity>
            <Text style={styles.title}>Bienvenue sur l'application Equitrec !</Text>
            <Text style={styles.subtitle}>Connectez-vous en scannant le QR Code de la compétiton</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('Scanner')}>
                <Text>Scanner un QR Code</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D3557",
    },
    containerLogo: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        margin: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        margin: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
        margin: 20,
    },
    button: {
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        margin: 20,
    }
});