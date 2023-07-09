import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';


const sendDataToApi = async () => {
    try {
        const db = SQLite.openDatabase('equitrec.db');
        db.transaction(
            tx => {
                tx.executeSql('select * from note;', [], (_, { rows }) => {
                    data = rows._array;
                    data = JSON.stringify(data);
                    console.log(data);
                });
            }    
        );

      const response = await fetch('http://127.0.0.1:8000/api/receive-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
        });
        

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
        console.error('Réponse du serveur:', error.response.data);
        console.error('Code de réponse:', error.response.status);
      } else if (error.request) {
        // La requête a été effectuée, mais aucune réponse n'a été reçue
        console.error('Pas de réponse reçue:', error.request);
      } else {
        // Une erreur s'est produite lors de la configuration de la requête
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
