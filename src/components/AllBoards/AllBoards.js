import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Board from '../Board/Board';



class AllBoards extends Component {
constructor(props){
  super(props);
}

render() {
  return (
    <View>
      { this.props.boards
        .map(board => (
          <Board key={ board.id } name ={ board.name} />
        ))
      }
    </View>
  );
}
}

export default AllBoards;