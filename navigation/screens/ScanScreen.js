import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QRCodeScanner from '../../components/BarCodeScanner';

export default function ScanScreen({ navigation }) {
    return (
            <QRCodeScanner />
            // <Button
            //     title="Go to Evaluation"
            //     onPress={() => navigation.navigate('Evaluation')}
            // />
    );
}
