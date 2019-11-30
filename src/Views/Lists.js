import React, { Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import db from '../resources/data.json';
import styles from '../resources/Styles';
import { Icon } from 'react-native-elements';
import AddModal from '../components/AddModal/AddListModal';
import AllLists from '../components/AllLists/AllLists';

class Lists extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props
        this.handler = this.handler.bind(this);
        
        this.state = {
            lists: navigation.getParam('lists'),
            tasks: navigation.getParam('tasks'),
            board: navigation.getParam('boardId'),
            isAddModalOpen: false,
            boardName: navigation.getParam('boardName'),
            newListName:'',
            newListColor:'red',
            toggle: navigation.getParam('toggle'),
        }
        
        setModalOpen = (isOpen) => (
            this.setState({isAddModalOpen: isOpen})
          )
        bn = ()=>{return this.state.boardName}
    }


    static navigationOptions = {
        headerStyle: {
          backgroundColor: 'white',
        },
        
        headerTitle: () => <Text style={styles.header}>{bn()}</Text>,
        headerRight: () => (
          <Icon name='ios-add' type='ionicon' color='black' size={40} style={styles.plus}
              onPress={ () => 
                // {Boards.add = true},
                setModalOpen(true)
            }/>
        ),
        
    };


    inputHandler(name, value){
        this.setState({[name]: value});
        
    }

    getHighestId(){
        let id = -1;
        const lists = this.state.lists;
        for(var i=0; i<lists.length; i++){
          obj = lists[i]
          if(obj.id > id){
            id = obj.id
          }
        }
        return id
      }
    
    changeColor(newColor){
        this.setState({newListColor: newColor})
        return newColor
    }

    create(color){
        const name = this.state.newListName;
        let boardId = this.state.board;
        let lists = this.state.lists;
        const nextId = this.getHighestId()+1;
        const newList = {
            id: nextId,
            name: name,
            color: color,
            boardId: boardId
        };
        lists.push(newList);
        this.setState({isAddModalOpen:false, lists: lists});
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

            let newTask = this.state.tasks

            for (var i = 0; i < newTask.length; i++) {
                var obj = newTask[i];
                
                if (obj.listId == id) {
                  let index = newTask.indexOf(obj);
                  i--;
                  newTask.splice(index, 1);
                  
                }
                
              }
            
            this.setState({
                lists: newList,
                tasks: newTask
            });

           
            
          }
        
        render(){  
          
            const {navigation} = this.props
        return (
            <View style={ this.state.toggle ? styles.body : styles.bodyLight}>
                <AllLists lists={ this.state.lists } tasks={navigation.getParam('tasks')} action={this.handler} boardId={ navigation.getParam('boardId') } navigation={ this.props.navigation }/>
                <AddModal
                isOpen={this.state.isAddModalOpen}
                closeModal={() => this.setState({ isAddModalOpen: false})}
                inputHandler={(name,value)=>{ this.inputHandler(name,value)}}
                action={(color) => { this.create(color) }}
                color={this.state.newListColor}
                selectedColor={()=>{return this.state.newListColor}}
                // fix when this component is unmounted
                changeColor ={(color)=>{return this.changeColor(color)}}
            />
            </View>
        
            );
        }
        }

    export default Lists;
