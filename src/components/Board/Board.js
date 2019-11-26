import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from './BoardStyles'


const Board = ({ name }) => (

        <View style={ styles.boards }>
            <Text style={ styles.text }>{ name }</Text>
        </View>

)


  
export default Board
