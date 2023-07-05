import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function HomeScreen({ navigation }) {
  const votreDonnees = {
    nom: "Doe",
    prenom: "John",
    age: 30,
    email: "johndoe@example.com",
  };

  let logoFromFile = require('../../assets/logo.png');

  const qrCodeContent = JSON.stringify({ data: votreDonnees });

  return (
    <View style={styles.container}>
      <Text>Accueil !</Text>
      <Text>Scannez le QR Code de la compétition !</Text>
      <QRCode style={styles.QrCode}
        value={qrCodeContent}
        logo={logoFromFile}
        logoSize={30}
      />
      <Button title="Go to Note" onPress={() => navigation.navigate("Note")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D3557",
  },
  QrCode: {
    width: "50%",
    height: "50%",
  }
});
