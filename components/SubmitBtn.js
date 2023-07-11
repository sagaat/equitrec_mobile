import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';

let data = [];

const sendDataToApi = async () => {
  try {
    const db = SQLite.openDatabase('equitrec.db');

    // Utiliser une promesse pour attendre la fin de la transaction SQLite
    const executeSqlPromise = new Promise((resolve, reject) => {
      db.transaction(
        tx => {
          tx.executeSql('select * from note;', [], (_, { rows }) => {
            console.log(JSON.stringify(rows._array));
            data = JSON.stringify(rows._array);
            resolve(); // Résoudre la promesse une fois que les données sont disponibles
          });
        },
        error => {
          reject(error); // Rejeter la promesse en cas d'erreur
        }
      );
    });

    await executeSqlPromise; // Attendre que la promesse soit résolue

    const response = await fetch('http://172.20.10.2:8000/api/receive-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    } else {
      console.error('Erreur de réponse du serveur:', response.status);
    }

  } catch (error) {
    if (error.response) {
      console.error('Réponse du serveur:', error.response.data);
      console.error('Code de réponse:', error.response.status);
    } else if (error.request) {
      console.error('Pas de réponse reçue:', error.request);
    } else {
      console.error('Erreur de configuration de la requête:', error.message);
    }
  }
};

export default function SubmitNotes() {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log('Submit Notes');
        sendDataToApi();
        alert('Notes envoyées');
      }}
    >
      <Text style={styles.buttonText}>Finaliser la notation</Text>
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
