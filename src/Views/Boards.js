import React, { Component} from 'react';
import { SafeAreaView, StatusBar, View, ScrollView, Dimensions } from "react-native";
import AllBoards from '../components/AllBoards/AllBoards';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import BoardPage from './Lists';
import Container from '../components/Scroll/Scroll';

const { height } = Dimensions.get('window');

class Boards extends Component {
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  constructor(props) {
      super(props);
      this.handler = this.handler.bind(this);
      this.state = {
        boards: db['boards'],
        lists: db['lists'],
        tasks: db['tasks'],
        screenHeight: 0
      }
    }

    handler(id) {
      

      let indexOfBoard = null;
      let newBoard = this.state.boards;
      for (var i = 0; i < newBoard.length; i++) {
        var obj = newBoard[i];
        
        if (obj.id == id) {
          indexOfBoard = newBoard.indexOf(obj);
          newBoard.splice(indexOfBoard,1);
          break
        }
        
      }
    
      

      let newLists = this.state.lists
      let newTask = this.state.tasks
      
      for (var i = 0; i < newLists.length; i++) {
        var obj = newLists[i];
        
        if (obj.boardId == id) {
          let index = newLists.indexOf(obj);
          
          for (var x = 0; x < newTask.length; x++) {
            var obj2 = newTask[x];
            
            if (obj2.listId == obj.id) {
              let index = newTask.indexOf(obj2);
              x--;
              newTask.splice(index, 1);
              
            }
            
          }

          
          i--;
          newLists.splice(index, 1);
          
        }
        
      }
      this.setState({
        boards: newBoard,
        lists: newLists,
        tasks: newTask
      });

      
    }
    
    render(){ 
      const scrollEnabled = this.state.screenHeight > height; 
      return (
        <SafeAreaView style={styles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#468189" /> */}
        <ScrollView
          style={styles.body}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={ styles.body }>
              <AllBoards boards={this.state.boards} lists={this.state.lists} tasks={this.state.tasks} action={this.handler} navigation = {this.props.navigation}/>
          </View>
          </ScrollView>
      </SafeAreaView>
        );
      }
    }

export default Boards;
