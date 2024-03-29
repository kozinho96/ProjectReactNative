import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Nativegg!</Text>
        <Text style={styles.instructions}>To get started, ediggt App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'OpenSans-Regular'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
