import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Task from '../Task/Task';
import styles from '../../resources/Styles';



class AllTasks extends Component {
  
constructor(props){
  super(props);
}

render() {
  return (
    <View>
      { this.props.tasks
        .map(task =>{
          if (task.listId == this.props.listId)
          return (
          <React.Fragment key={task.id}>
            <Swipeout autoClose={true}
              right= {[
                {
                  onPress: ()=>{
                    this.props.action(task.id)
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
            <Task id={ task.id } name ={ task.name } description={task.description} isFinished={task.isFinished}/>
           </Swipeout>
          </React.Fragment>
          )
        })

      }
    </View>
  );
}
}

export default AllTasks;