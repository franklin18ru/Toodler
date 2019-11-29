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
          <React.Fragment key={board.id}>
          <Swipeout autoClose={true}
          right= {[
            {
              onPress: ()=>{
                  this.props.action(board.id)
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Lists', {boardId: board.id,boardName: board.name, lists: this.props.lists, tasks: this.props.tasks})}>
            <Board id={ board.id } name ={ board.name} />
          </TouchableHighlight>
          </Swipeout>
          </React.Fragment>
        ))
      }
    </View>
    
  );
}
}

export default AllBoards;