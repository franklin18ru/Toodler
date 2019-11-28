import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import styles from './BoardStyles';
import Swipeout from 'react-native-swipeout';


const Board = props => (
   
    <Swipeout autoClose={true}
        right= {[
          {
            onPress: ()=>{
                props.boards.splice(props.id-1,1);
            },
            text:'Delete',
           
            type:'delete'
          },
          {
            onPress: ()=>{},
            text:'Edit',
            backgroundColor:'green',
            type:'edit'
          }
         
        ]}
        ><View style={ styles.boards }>
        <Text style={ styles.text }>{ props.name }</Text>
    </View></Swipeout>

)


)


  
export default Board
