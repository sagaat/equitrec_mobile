import { StyleSheet, SafeAreaView, Button } from 'react-native';
import React from 'react';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
