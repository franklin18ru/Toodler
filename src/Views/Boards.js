import React, { Component} from 'react';
import { SafeAreaView, View, Text, ScrollView, Dimensions, Button} from "react-native";
import AllBoards from '../components/AllBoards/AllBoards';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import BoardPage from './Lists';
import Container from '../components/Scroll/Scroll';
import { Icon } from 'react-native-elements';
import CreateBoard from '../components/CreateBoard/CreateBoard'
import Board from '../components/Board/Board';
import AddModal from '../components/AddModal/AddModal';



const { height } = Dimensions.get('window');

class Boards extends Component {
  constructor(props) {

    super(props);

    this.state = {
      boards: db['boards'],
      screenHeight: 0,
      isAddModalOpen: false


    }
    

    setModalOpen = (isOpen) => (
      this.setState({isAddModalOpen: isOpen})
    )
  }
  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#181A24',
    },
    
    headerTitle: () => <Text style={styles.header}>My boards</Text>,
    headerRight: () => (
      <Icon name='ios-add' type='ionicon' color='white' size={40} style={styles.plus}
          onPress={ () => 
            // {Boards.add = true},
            setModalOpen(true)
        }/>
    ),
    
  };

  

  create(n,p,b){
    const newBoard={
      'name':n,
      'thumbnailPhoto':p
    };
    b.push(newBoard);
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  
    
    render(){ 
      const scrollEnabled = this.state.screenHeight > height; 
      const {isAddModalOpen} = this.state
      return (
        <SafeAreaView style={styles.container}>
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
          <AddModal
            isOpen={this.state.isAddModalOpen}
            closeModal={() => this.setState({ isAddModalOpen: false})}
            />
      </SafeAreaView>
        );
      }
    }

export default Boards;
