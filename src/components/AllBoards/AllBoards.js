import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Board from '../Board/Board';
import Swipeout from 'react-native-swipeout';


class AllBoards extends Component {
constructor(props){
  super(props);
}

render() {
  return (
    <View>
      { this.props.boards
        .map(board =>(
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Lists', {boardId: board.id})}>
            <Board id={ board.id } name ={ board.name} />
          </TouchableHighlight>
          </Swipeout>
        ))
      }
    </View>
  );
}
}

export default AllBoards;