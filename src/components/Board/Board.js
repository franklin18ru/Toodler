import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from './BoardStyles';



const Board = props => (
  <View style={ props.toggle ? styles.body : styles.bodyLight}>
    <View style={ props.toggle ? styles.boards : styles.boardsLight}>
      <Text style={ props.toggle ? styles.text : styles.textLight} >{ props.name }</Text>
    </View>
  </View>

)





  
export default Board
