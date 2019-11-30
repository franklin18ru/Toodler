import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Board/BoardStyles';


const List = props => (
    <View style={ props.toggle ? styles.body : styles.bodyLight}>
        <View style={ props.toggle ? styles.boards : styles.boardsLight}>
        <View style={{width: 50, height: 50, backgroundColor:props.color}}/>
        <Text style={ props.toggle ? styles.text : styles.textLight} >{ props.name }</Text>
        </View>
    </View>

)


  
export default List
