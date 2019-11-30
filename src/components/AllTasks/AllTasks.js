import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Task from '../Task/Task';
import styles from '../../resources/Styles';
import AddModal from '../AddModal/EditTaskModal';



class AllTasks extends Component {
  
constructor(props){
  super(props);
  this.handler = this.handler.bind(this);
  this.state = {
    tasks: this.props.tasks,
    isModalEditOpen: false,
    list:this.props.listName,
    lists:this.props.lists
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
openEditModal(){
  this.setState({isModalEditOpen: true})
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
                    this.openEditModal()
                  },
                  text:'Edit',
                  backgroundColor:'green',
                  type:'edit'
                }
              
              ]}
              >
            <Task id={ task.id } name ={ task.name } action={this.handler} description={task.description} isFinished={task.isFinished} toggle={this.props.navigation.getParam('toggle')}/>
           </Swipeout>
          </React.Fragment>
          )
        })

      }
      <AddModal 
        isOpen={this.state.isModalEditOpen}
        closeModal={() => this.setState({ isModalEditOpen: false})}
        currentList={this.state.list}
        allLists={this.state.lists}
        
      />
    </View>
  );
}
}

export default AllTasks;