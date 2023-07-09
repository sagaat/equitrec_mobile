import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import OverWriteBtn from '../../components/OverWriteBtn';
import SubmitNotes from '../../components/SubmitBtn';
import AddNotesBtn from '../../components/AddNotes';


export default function NoteScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Note !</Text>
            <Text>Notez le cavalier !</Text>
            {/* <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <OverWriteBtn/>
            <AddNotesBtn/> */}
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