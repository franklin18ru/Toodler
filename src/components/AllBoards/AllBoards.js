import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import Board from '../Board/Board';
import Scroll from '../Scroll/Scroll';


class AllBoards extends Component {
constructor(props){
  super(props);
}

render() {
  return (
    <Scroll>
      { this.props.boards
        .map(board =>(
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Lists', {boardId: board.id})}>
            <Board id={ board.id } name ={ board.name} />
          </TouchableHighlight>
        ))
      }
    </Scroll>
  );
}
}

export default AllBoards;