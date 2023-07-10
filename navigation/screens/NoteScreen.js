import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import OverWriteBtn from '../../components/OverWriteBtn';
import SubmitNotes from '../../components/SubmitBtn';
import AddNotesBtn from '../../components/AddNotes';
import InitDB from '../../components/InitDB';


export default function NoteScreen({ route }) {
    const { scannedData } = route.params;

    return (
        <View style={styles.container}>
            <InitDB />
            <Text>Note !</Text>
            <Text>Notez le cavalier !</Text>
            <Text>Scanned Data: {scannedData}</Text>
            <Button
                title="Enregistrer la note"
                onPress={() => navigation.navigate('Note')}
            />
            {/* <OverWriteBtn/> */}
            <AddNotesBtn/>
            <SubmitNotes/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});