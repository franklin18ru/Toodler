import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import AllTasks from '../components/AllTasks/AllTasks';
import AddModal from '../components/AddModal/AddTaskModal';
 

class Tasks extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props
        
        this.state = {
            tasks: navigation.getParam('tasks'),
            list: navigation.getParam('listId'),
            isAddModalOpen: false,
            newTaskname:'',
            newTaskdescripition:'',
            toggle: navigation.getParam('toggle'),

        }
        setModalOpen = (isOpen) => (
            this.setState({isAddModalOpen: isOpen})
          )

    }
        create(){
            // id: nextId,
            // name: this.state.newTaskname,
            // description: this.state.newTaskdescripition,
            // isFinished: false,
            // listId: this.state.list
        }
        
        render(){  
            const {navigation} = this.props
        return (
            <View style={ this.state.toggle ? styles.body : styles.bodyLight}>
                <AllTasks tasks={this.state.tasks} listId={navigation.getParam('listId')} navigation={ this.props.navigation }/>
                <AddModal
                    isOpen={this.state.isAddModalOpen}
                    closeModal={() => this.setState({ isAddModalOpen: false})}
                />
            </View>
        
            );
        }
        }

    export default Tasks;
