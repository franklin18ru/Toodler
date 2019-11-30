import React, { Component } from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './BoardStyles';



const Board = props => (
  <View style={ styles.boards }>
    <Image
          style={{width: 50, height: 50}}
          source={{uri: props.photo}}
        />
    <Text style={ styles.text } >{ props.name }</Text>
  </View>

)





  
export default Board
