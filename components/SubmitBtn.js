import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';
import axios from 'axios';


// Ouvrir la connexion à la base de données SQLite
const db = SQLite.openDatabase({ name: 'mydatabase.db' });

// Récupérer les données de la table souhaitée
db.transaction((tx) => {
  tx.executeSql('SELECT * FROM ma_table', [], (tx, results) => {
    const data = results.rows.raw();
    // Envoyer les données récupérées vers votre site web
    sendDataToWebsite(data);
  });
});


// Envoyer les données vers votre site web
const sendDataToWebsite = async (data) => {
  try {
    const response = await axios.post('https://votre-site-web.com/api/receive-data', {
      data: JSON.stringify(data),
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default function SubmitNotes() {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                console.log('Submit Notes');
            }
        }
        >
            <Text style={styles.buttonText}>Submit Notes</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 20,
    },
});
