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
  
      this.state = {boards: db['boards'], screenHeight: 0}
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
              <AllBoards boards={this.state.boards} navigation = {this.props.navigation}/>
          </View>
          </ScrollView>
      </SafeAreaView>
        );
      }
    }

export default Boards;
