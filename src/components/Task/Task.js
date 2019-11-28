import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Board/BoardStyles';


const List = props => (
        <View style={ styles.boards }>
            <Text style={ styles.text }>{ props.name }</Text>
            <Text style={ styles.text }>{ props.description}</Text>
            <Text style={ styles.text }>{ props.isFinished}</Text>
        </View>

)


  
export default List
