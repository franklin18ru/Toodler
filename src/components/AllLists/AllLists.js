import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
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
          return (
          <React.Fragment key={list.id}>
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
        >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Tasks', { listId: list.id })}>
            <List id={ list.id } name ={ list.name } />
          </TouchableHighlight>
          </Swipeout>
          </React.Fragment>
          )
        })

      }
    </View>
  );
}
}

export default AllLists;