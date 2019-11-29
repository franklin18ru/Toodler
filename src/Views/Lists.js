import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import AllLists from '../components/AllLists/AllLists';

class Lists extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props
        this.handler = this.handler.bind(this);
        
        this.state = {lists: navigation.getParam('lists')}
        }

        handler(id) {

            
            let newList = this.state.lists;
            for (var i = 0; i < newList.length; i++) {
                var obj = newList[i];
        
                if (obj.id == id) {
                    let index = newList.indexOf(obj);
                    newList.splice(index,1);
                    break
                }
        
            }
            
            this.setState({
                lists: newList
            });
            // Add delete to tasks
          }
        
        render(){  
            const {navigation} = this.props
        return (
            <View style={ styles.body }>
                <AllLists lists={ this.state.lists } tasks={navigation.getParam('tasks')} action={this.handler} boardId={ navigation.getParam('boardId') } navigation={ this.props.navigation }/>
            </View>
        
            );
        }
        }

    export default Lists;
