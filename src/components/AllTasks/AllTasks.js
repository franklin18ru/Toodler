import React, { Component } from 'react';
import { View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Task from '../Task/Task';
import AddModal from '../EditTask/EditTaskModal';



class AllTasks extends Component {
  
constructor(props){
  super(props);
  this.handler = this.handler.bind(this);
  this.state = {
    tasks: this.props.tasks,
    isModalEditOpen: false,
    list: this.props.listId,
    lists:this.props.lists,
    taskId: -1,
    listId: this.props.listId
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

move(){
  let tasks = this.state.tasks;
  for(var i =0; i<tasks.length; i++){
    obj = tasks[i];
    if(obj.id == this.state.taskId)
    {
      obj.listId = this.state.listId;
      break
    }
  }
  this.setState({tasks:tasks, isModalEditOpen: false});
}

changeList(id){
  this.setState({list:id, listId:id})
  
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
                    this.setState({taskId:task.id})
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
        changeList={(id)=>{this.changeList(id)}}
        action={()=>{this.move()}}
      />
    </View>
  );
}
}

export default AllTasks;