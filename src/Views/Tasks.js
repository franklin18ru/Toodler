import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import AllTasks from '../components/AllTasks/AllTasks';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {tasks: db['tasks']}
        }
        
        render(){  
            const {navigation} = this.props
        return (
            <View style={ styles.body }>
                <AllTasks tasks={this.state.tasks} listId={navigation.getParam('listId')}/>
            </View>
        
            );
        }
        }

    export default Tasks;
