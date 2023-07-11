import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

export default function InitDB() {
    // le useMemo permet d'évite d'ouvrir une nouvelle instance de la base de données à chaque rendu du composant
    const db = React.useMemo(() => SQLite.openDatabase('equitrec.db'), []);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists cavalier (id integer primary key AUTOINCREMENT, dossard integer);', 
                'insert into niveau (id, nom, id_cavalier) values (1, "Club 1", 1);',
                'insert into niveau (id, nom, id_cavalier) values (2, "Club 2", 2);',
                'insert into niveau (id, nom, id_cavalier) values (3, "Club 3", 3);',
            );
            tx.executeSql(
                'create table if not exists juge (id integer primary key AUTOINCREMENT);',
                'insert into juge (id) values (1);',
            );
            tx.executeSql(
                'create table if not exists obstacle (id integer primary key);',
                'insert into obstacle (id) values (1);',
            );
            tx.executeSql(
                'create table if not exists niveau (id integer primary key, nom text, id_cavalier integer, FOREIGN KEY(id_cavalier) REFERENCES cavalier(id));',
                'insert into niveau (id, nom, id_cavalier) values (1, "Club 1", 1);',
                'insert into niveau (id, nom, id_cavalier) values (2, "Club 2", 2);',
                'insert into niveau (id, nom, id_cavalier) values (3, "Club 3", 3);',
            );
            tx.executeSql(
                'create table if not exists style (id integer primary key, val_style integer);',
                'insert into style (id, val_style) values (1, 0);',
                'insert into style (id, val_style) values (2, 5);',
                'insert into style (id, val_style) values (3, 7);',
            );
            tx.executeSql(
                'create table if not exists contrat (id integer primary key, val_contrat integer);',
                'insert into contrat (id, val_contrat) values (1, 0);',
                'insert into contrat (id, val_contrat) values (2, 5);',
                'insert into contrat (id, val_contrat) values (3, 7);',
            );
            tx.executeSql(
                'create table if not exists allure (id integer primary key, val_allure integer);',
                'insert into allure (id, val_allure) values (1, 0);',
                'insert into allure (id, val_allure) values (2, 5);',
                'insert into allure (id, val_allure) values (3, 7);',
            );
            tx.executeSql(
                'create table if not exists penalite (id integer primary key, libelle_penalite text, val_penalite integer, description text);',
                'insert into penalite (id, libelle_penalite, val_penalite, description) values (1, "Refus", 5, "Le cheval refuse l\'obstacle");',
                'insert into penalite (id, libelle_penalite, val_penalite, description) values (2, "Chute", 10, "Le cavalier chute du cheval");',
                'insert into penalite (id, libelle_penalite, val_penalite, description) values (3, "Dérobade", 5, "Le cheval dérobe l\'obstacle");',
            );
            tx.executeSql(
                `create table if not exists note (
                    id integer primary key, 
                    id_obstacle integer, 
                    id_cavalier integer, 
                    id_niveau integer, 
                    id_style integer, 
                    id_contrat integer, 
                    id_allure integer, 
                    id_penalite integer, 
                    FOREIGN KEY(id_obstacle) REFERENCES obstacle(id), 
                    FOREIGN KEY(id_cavalier) REFERENCES cavalier(id),
                    FOREIGN KEY(id_niveau) REFERENCES niveau(id), 
                    FOREIGN KEY(id_style) REFERENCES style(id), 
                    FOREIGN KEY(id_contrat) REFERENCES contrat(id), 
                    FOREIGN KEY(id_allure) REFERENCES allure(id), 
                    FOREIGN KEY(id_penalite) REFERENCES penalite(id)
                );`
            );
        });
    }, [db]);

}
