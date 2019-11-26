import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AllBoards from './src/components/Boards/Board';
import AllBoards from './src/components/AllBoards/AllBoards';
import db from './data.json';
import styles from './src/resources/Styles';


 class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {boards: db['boards']}
  }
  

  render(){  
    return (
      <View style={ styles.body }>
        <AllBoards boards={this.state.boards}/>
      </View>
      );
    }
  }
export default App;