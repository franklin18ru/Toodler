import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Board from '../Board/Board';
import Swipeout from 'react-native-swipeout';
import styles from '../Board/BoardStyles';

class AllBoards extends Component {
constructor(props){
  super(props);
  this.state= {
    toggle: this.props.navigation.getParam('toggle'),
  }
}

render() {
  return (
    <View style={styles.body}>
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Lists', {boardId: board.id,boardName: board.name, lists: this.props.lists, tasks: this.props.tasks, toggle: this.state.toggle} )}>
            <Board id={ board.id } photo={board.thumbnailPhoto} name ={ board.name} toggle={this.props.navigation.getParam('toggle')} />
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