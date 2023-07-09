import React, { Component } from 'react';

import { Platform, StyleSheet, View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      TextInput_Data: ''
    }
  }
}


checkSwitch = (param) => {

  switch (param) {

    case '1':
      break;

    case '2':
      break;

    case '3':
      break;

    case '4':
      break;
    case '5':
      break;

    default:
  }
}

render=() =>{
  return (
    <View style={styles.MainContainer}>

      <TextInput
        placeholder="Enter Number"
        onChangeText={data => this.setState({ TextInput_Data: data })}
        style={styles.textInputStyle}
        keyboardType={"numeric"}
      />
      <TouchableOpacity onPress={this.checkSwitch.bind(this, this.state.TextInput_Data)} activeOpacity={0.6} style={styles.button} >
        <Text style={styles.TextStyle}> Click </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#008b8b',
    marginBottom: 15
  },
  button: {
    width: '80%',
    padding: 8,
    backgroundColor: '#008b8b',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextStyle: {
    color: '#fff',
  }
});