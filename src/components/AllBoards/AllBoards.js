import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Board from '../Board/Board';
import BoardPage from '../../Views/Lists';



class AllBoards extends Component {
constructor(props){
  super(props);
}

render() {
  return (
    <View>
      { this.props.boards
        .map(board =>(
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Lists', {boardId: board.id})}>
            <Board id={ board.id } name ={ board.name} />
          </TouchableHighlight>
        ))
      }
    </View>
  );
}
}

export default AllBoards;