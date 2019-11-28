import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import AllLists from '../components/AllLists/AllLists';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {lists: db['lists']}
        }
        
        render(){  
            const {navigation} = this.props
        return (
            
            <View style={ styles.body }>
                <AllLists lists={this.state.lists} boardId={navigation.getParam('boardId')}/>
            </View>
        
            );
        }
        }

    export default Lists;
