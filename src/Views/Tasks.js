import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import AllTasks from '../components/AllTasks/AllTasks';

class Tasks extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props
        this.handler = this.handler.bind(this);
        this.state = {tasks: navigation.getParam('tasks')}
        }

        handler(id) {

            let newTask = this.state.tasks;
            newTask.splice(id-1,1)
            this.setState({
                tasks: newTask
            });
            // Add delete to lists and tasks
          }
        
        render(){  
            const {navigation} = this.props
        return (
            <View style={ styles.body }>
                <AllTasks tasks={this.state.tasks} action={this.handler} listId={navigation.getParam('listId')}/>
            </View>
        
            );
        }
        }

    export default Tasks;
