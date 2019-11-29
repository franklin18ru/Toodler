import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Task from '../Task/Task';
import styles from '../../resources/Styles';



class AllTasks extends Component {
  
constructor(props){
  super(props);
  this.handler = this.handler.bind(this);
  this.state = {
    tasks: this.props.tasks
  
  }
}
handler(id){
  let newTask = this.state.tasks
  for(var i = 0; i< newTask.length; i++){
    obj = newTask[i]
    if(obj.id == id){
      obj.isFinished = obj.isFinished == true ? false : true;
      break
    }
  }
  this.setState({tasks: newTask})
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
                  onPress: ()=>{},
                  text:'Edit',
                  backgroundColor:'green',
                  type:'edit'
                }
              
              ]}
              >
            <Task id={ task.id } name ={ task.name } action={this.handler} description={task.description} isFinished={task.isFinished}/>
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