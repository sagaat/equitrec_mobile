import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';

const AddNotes = () => {
    const db = SQLite.openDatabase('equitrec.db');
    db.transaction(
        tx => {
            tx.executeSql(
                'insert into note (id, id_obstacle, id_cavalier, id_niveau, id_style, id_contrat, id_allure, id_penalite) values (1, 1, 1, 1, 1, 1, 1, 1, 1);',
                'insert into note (id, id_obstacle, id_cavalier, id_niveau, id_style, id_contrat, id_allure, id_penalite) values (2, 2, 2, 2, 2, 2, 2, 2, 2);',
                'insert into note (id, id_obstacle, id_cavalier, id_niveau, id_style, id_contrat, id_allure, id_penalite) values (3, 3, 3, 3, 3, 3, 3, 3, 3);'
                );
        }
    );
};

export default function AddNotesBtn () {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => AddNotes()}
        >
            <Text style={styles.buttonText}>Add Notes</Text>
        </TouchableOpacity>
        
    );
};

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
