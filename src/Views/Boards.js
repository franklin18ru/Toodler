import React, { Component} from 'react';
import { SafeAreaView, View, Text, ScrollView, Dimensions} from "react-native";
import AllBoards from '../components/AllBoards/AllBoards';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import { Icon } from 'react-native-elements';
import AddModal from '../components/AddModal/AddBoardModal';
import { takePhoto } from '../components/TakePhoto/TakePhoto2';






class Boards extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.handler = this.handler.bind(this);
    const { height } = Dimensions.get('window');
    this.state = {
      boards: db['boards'],
      lists: db['lists'],
      tasks: db['tasks'],
      screenHeight: height,
      isAddModalOpen: false,
      scrollEnabled: false,
      newBoardName: '',
      newBoardPhoto: 'https://www.northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png',
      toggle: navigation.getParam('toggle'),
    }
    

    setModalBoardOpen = (isOpen) => (
      this.setState({isAddModalOpen: isOpen})
    )
  }
  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    
    headerTitle: () => <Text style={styles.header}>My boards</Text>,
    headerRight: () => (
      <Icon name='ios-add' type='ionicon' color='#181A24' size={40} style={styles.plus}
          onPress={ () => 
            // {Boards.add = true},
            setModalBoardOpen(true)
        }/>
    ),
    
  };

  
  contentChanged(height){
    console.log(height);
    if(this.state.screenHeight-100 < height){
      this.setState({scrollEnabled:true})
      return
    }
    this.setState({scrollEnabled:false})
  }


  inputHandler(name, value){
    this.setState({[name]: value});
    
  }

  getThumbnail(){
    this.get();
  }


  async get(){
    const photo = await takePhoto();
    this.setState({'newBoardPhoto':photo});
  }
    getHighestId(){
      let id = -1;
      const boards = this.state.boards;
      for(var i=0; i<boards.length; i++){
        obj = boards[i]
        if(obj.id > id){
          id = obj.id
        }
      }
      return id
    }
    create(){
      const name = this.state.newBoardName;
      const photo = this.state.newBoardPhoto;
      let boards = this.state.boards;
      const nextId = this.getHighestId()+1;
      const newBoard = {
        id:nextId,
        name:name,
        thumbnailPhoto: photo
      };
      boards.push(newBoard);
      this.setState({isAddModalOpen:false, boards: boards});
    }

    photoTaken(){
      if(this.state.newBoardPhoto != ''){
        return true
      }
      return false
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
      
      
      return (
        <SafeAreaView style={styles.container, {flex: 1, backgroundColor: this.state.toggle ? '#181A24' : 'white' }}>

        {/* <StatusBar barStyle="light-content" backgroundColor="#468189" /> */}
        <ScrollView
          style={this.state.toggle ? styles.body : styles.bodyLight}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={this.state.scrollEnabled}
          onContentSizeChange={(w,h)=>{this.contentChanged(h)}}
        >
          <View style={ this.state.toggle ? styles.body : styles.bodyLight}>
              <AllBoards boards={this.state.boards} lists={this.state.lists} tasks={this.state.tasks} action={this.handler} navigation = {this.props.navigation}/>
              
          </View>

          </ScrollView>
          <AddModal
                isOpen={this.state.isAddModalOpen}
                closeModal={() => this.setState({ isAddModalOpen: false})}
                action={(photo) => { this.create(photo) }}
                name={this.state.newBoardName}
                photo={this.state.newBoardPhoto}
                takePhoto={()=>{ this.getThumbnail() }}
                inputHandler={(name,value)=>{ this.inputHandler(name,value)}}
                hasTakenPhoto={()=>{return this.photoTaken}}
            />
      </SafeAreaView>
        );
      }
    }

export default Boards;
