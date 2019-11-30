import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../Task/TaskStyle';


const List = props => (
    <View style={ props.toggle ? styles.body : styles.bodyLight}>
     
        <View style={ props.toggle ? styles.tasks : styles.tasksLight} >
            <Text style={ props.toggle ? styles.text : styles.textLight} >{ props.name }</Text>
        </View>

        <View style={{ alignSelf: 'flex-end', width: 20, height: 20, backgroundColor:props.color}}/>
   
    </View>

)


  
export default List
