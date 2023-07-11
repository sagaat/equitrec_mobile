import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

const OverWriteDB = () => {
    // le useMemo permet d'évite d'ouvrir une nouvelle instance de la base de données à chaque rendu du composant
    const db = React.useMemo(() => SQLite.openDatabase('equitrec.db'), []);

    db.transaction(tx => {
        tx.executeSql(
            // juge
            'insert into juge (id) values (1);',
        );
        tx.executeSql(
            // cavalier
            'insert into cavalier (dossard) values (001);',
            'insert into cavalier (dossard) values (002);',
            'insert into cavalier (dossard) values (003);',
        );
        tx.executeSql(
            // obstacle
            'insert into obstacle (id) values (1);',
        );
        tx.executeSql(
            // niveau
            'insert into niveau (id, nom, id_cavalier) values (1, "Club 1", 1);',
            'insert into niveau (id, nom, id_cavalier) values (2, "Club 2", 2);',
            'insert into niveau (id, nom, id_cavalier) values (3, "Club 3", 3);',
        );
        tx.executeSql(
            // style
            'insert into style (id, val_style) values (1, 0);',
            'insert into style (id, val_style) values (2, 5);',
            'insert into style (id, val_style) values (3, 7);',
        );
        tx.executeSql(
            // contrat
            'insert into contrat (id, val_contrat) values (1, 0);',
            'insert into contrat (id, val_contrat) values (2, 5);',
            'insert into contrat (id, val_contrat) values (3, 7);',
        );
        tx.executeSql(
            // allure
            'insert into allure (id, val_allure) values (1, 0);',
            'insert into allure (id, val_allure) values (2, 5);',
            'insert into allure (id, val_allure) values (3, 7);',
        );
        tx.executeSql(
            // penalite
            'insert into penalite (id, libelle_penalite, val_penalite, description) values (1, "Refus", 5, "Le cheval refuse l\'obstacle");',
            'insert into penalite (id, libelle_penalite, val_penalite, description) values (2, "Chute", 10, "Le cavalier chute du cheval");',
            'insert into penalite (id, libelle_penalite, val_penalite, description) values (3, "Dérobade", 5, "Le cheval dérobe l\'obstacle");',
        );

        alert('Base de données surchargée');
    });
}



export default function OverWriteBtn() {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => OverWriteDB()}
        >
            <Text style={styles.buttonText}>OverWrite DB</Text>
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
