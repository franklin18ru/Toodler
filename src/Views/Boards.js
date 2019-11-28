import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableHighlight } from 'react-native';
import AllBoards from '../components/AllBoards/AllBoards';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import BoardPage from './Lists';

class Boards extends Component {
  
  constructor(props) {
      super(props);
  
      this.state = {boards: db['boards']}
    }
    
    render(){  
      return (
          <View style={ styles.body }>
              <AllBoards boards={this.state.boards} navigation = {this.props.navigation}/>
          </View>
        
        );
      }
    }

export default Boards;
