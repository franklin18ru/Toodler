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

            for (var i = 0; i < newTask.length; i++) {
                var obj = newTask[i];
        
                if (obj.id == id) {
                    let index = newTask.indexOf(obj);
                    newTask.splice(index,1);
                    break
                }
        
            }

            this.setState({
                tasks: newTask
            });
            
            console.log(this.state.tasks);
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
