import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Board/BoardStyles';


const List = props => (
        <View style={ styles.boards}>
            <Text style={ styles.text }>{ props.name }</Text>
        </View>

)


  
export default List
