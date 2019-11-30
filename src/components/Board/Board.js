import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './BoardStyles';



const Board = props => (
  <View style={ props.toggle ? styles.body : styles.bodyLight}>
    <View style={ props.toggle ? styles.boards : styles.boardsLight}>
      <Image
          style={styles.img}
          source={{uri: props.photo}}
        />
      <Text style={ props.toggle ? styles.text : styles.textLight} >{ props.name }</Text>
    </View>
  </View>

)





  
export default Board
