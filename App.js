import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import BoardScreen from './src/Views/Boards';
import AppContainer from './src/routes/index';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}