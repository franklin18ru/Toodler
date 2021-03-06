import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import List from '../List/List';



class AllLists extends Component {
  
constructor(props){
  super(props);
  this.state= {
    toggle: this.props.navigation.getParam('toggle'),
  }
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
              this.props.action(list.id)
            },
            text:'Delete',
           
            type:'delete'
          },
          // {
          //   onPress: ()=>{},
          //   text:'Edit',
          //   backgroundColor:'green',
          //   type:'edit'
          // }
         
        ]}
        
        >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Tasks', { listId: list.id , listName: list.name, lists:this.props.lists, tasks: this.props.tasks, toggle: this.state.toggle})}>
            <List id={ list.id } color={list.color} name ={ list.name } toggle={this.props.navigation.getParam('toggle')}/>
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