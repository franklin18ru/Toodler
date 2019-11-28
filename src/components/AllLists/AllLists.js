import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import List from '../List/List';
import styles from '../../resources/Styles';



class AllLists extends Component {
  
constructor(props){
  super(props);
}

render() {
  return (
    <View>
      { this.props.lists
        .map(list =>{
          if (list.boardId == this.props.boardId)
            return <List id={ list.id } name ={ list.name } />
        
        })
      }
    </View>
  );
}
}

export default AllLists;