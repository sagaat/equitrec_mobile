import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function HomeScreen({ navigation }) {
  const [datas, setData] = useState();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setData(data);
    console.log('coucou', data);
    alert(`le QR Code a été scanné👌`);
    console.log('la bizz',datas);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Accueil!</Text>
      <Text>Scannez le QR Code de la compétition!</Text>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

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
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  qrCodeDataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  qrCodeDataText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  qrCodeData: {
    fontSize: 16,
  },
});