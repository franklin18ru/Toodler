import React, { Component} from 'react';
import { Text, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import styles from '../resources/Styles';
import AllTasks from '../components/AllTasks/AllTasks';
import AddModal from '../components/AddTask/AddTaskModal';
import { Icon } from 'react-native-elements';
 

class Tasks extends Component {
    constructor(props) {
        super(props);
        const {navigation} = this.props
        const { height } = Dimensions.get('window');
        
        this.state = {
            tasks: navigation.getParam('tasks'),
            list: navigation.getParam('listId'),
            listName: navigation.getParam('listName'),
            lists: navigation.getParam('lists'),
            isAddModalOpen: false,
            screenHeight: height,
            scrollEnabled: false,
            newTaskname:'',
            newTaskdescripition:'',
            toggle: navigation.getParam('toggle'),

        }
        setModalTaskOpen = (isOpen) => (
            this.setState({isAddModalOpen: isOpen})  
          )
          ln = ()=>{return this.state.listName}
    }

    contentChanged(height){
        if(this.state.screenHeight-100 < height){
          this.setState({scrollEnabled:true})
          return
        }
        this.setState({scrollEnabled:false})
      }

    static navigationOptions = {
        headerStyle: {
          backgroundColor: 'white',
        },
        
        headerTitle: () => <Text style={styles.header}>{ln()}</Text>,
        headerRight: () => (
          <Icon name='ios-add' type='ionicon' color='black' size={40} style={styles.plus}
              onPress={ () => 
                // {Boards.add = true},
                setModalTaskOpen(true)
            }/>
        ),
        
      };

        getHighestId(){
            let id = -1;
            const tasks = this.state.tasks;
            for(var i=0; i<tasks.length; i++){
            obj = tasks[i]
            if(obj.id > id){
                id = obj.id
            }
            }
            return id
        }
        create(){
            const nextId = this.getHighestId()+1;
            let tasks = this.state.tasks;
            const newTask = {
                id: nextId,
                name: this.state.newTaskName,
                description: this.state.newTaskdescripition,
                isFinished: false,
                listId: this.state.list
            };
            tasks.push(newTask);
            this.setState({isAddModalOpen:false, tasks: tasks});
        }

        inputHandler(name, value){
            this.setState({[name]: value});
            
        }
        
        render(){  
            const {navigation} = this.props
        return (
            <SafeAreaView style={styles.container, {flex: 1, backgroundColor: this.state.toggle ? '#181A24' : 'white' }}>
                <ScrollView
                style={this.state.toggle ? styles.body : styles.bodyLight}
                contentContainerStyle={styles.scrollview}
                scrollEnabled={this.state.scrollEnabled}
                onContentSizeChange={(w,h)=>{this.contentChanged(h)}}
                >
                    <View style={ this.state.toggle ? styles.body : styles.bodyLight}>
                        <AllTasks tasks={this.state.tasks} listName={this.state.listName} lists={this.state.lists} listId={navigation.getParam('listId')} navigation={ this.props.navigation }/>
                    </View>
                </ScrollView>
                    <AddModal
                        isOpen={this.state.isAddModalOpen}
                        closeModal={() => this.setState({ isAddModalOpen: false})}
                        inputHandler={(name,value)=>{ this.inputHandler(name,value)}}
                        action={() => { this.create() }}
                    />
            </SafeAreaView>
            );
        }
        }

    export default Tasks;
