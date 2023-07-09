import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useEffect } from 'react';

export default function InitDB() {
    const db = SQLite.openDatabase('equitrec.db');

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'create table if not exists cavalier (id integer primary key AUTOINCREMENT, dossard integer);'
            );
            tx.executeSql(
                'create table if not exists juge (id integer primary key AUTOINCREMENT);'
            ); 
            tx.executeSql(
                'create table if not exists obstacle (id integer primary key);'
            );
            tx.executeSql(
                'create table if not exists niveau (id integer primary key, nom text, id_cavalier integer, FOREIGN KEY(id_cavalier) REFERENCES cavalier(id));'
            );
            tx.executeSql(
                'create table if not exists style (id integer primary key, val_style integer);'
            );
            tx.executeSql(
                'create table if not exists contrat (id integer primary key, val_contrat integer);'
            );
            tx.executeSql(
                'create table if not exists allure (id integer primary key, val_allure integer);'
            );
            tx.executeSql(
                'create table if not exists penalite (id integer primary key, libelle_penalite text, val_penalite integer, description text);'
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
    }, []);

}