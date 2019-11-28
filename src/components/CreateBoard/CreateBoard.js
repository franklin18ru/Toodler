import React, { Component } from 'react';
import { Text, View, Button, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './CreateBoardStyles';
import { takePhoto } from '../TakePhoto/TakePhoto2';

/*
    Connect camera button to TakePhoto component
    
*/

class CreateBoard extends Component {
state = {
    boardName:'',
    boardPhoto:''
}
inputHandler(name, value){
    this.setState({[name]: value});
}

async getThumbnail(){
    const photo = await takePhoto();
    this.setState({'boardPhoto':photo});
}

render() {
    
    return (
        <View style={ styles.column }>
            
            <View>
                <Text style={ styles.newBoard }>{this.state['boardName']}</Text>
            </View>
            <View style={ styles.row }>    
                <TextInput style={ styles.textInput }
                    placeholder='Enter your board name'
                    autoCapitalize='sentences'
                    autoCompleteType='name'
                    value={ this.state.comment }
                    onChangeText={ text => this.inputHandler('boardName',text) }
                />
                <Icon 
                    style={ styles.icon } 
                    name='ios-camera' color='#181A24' type='ionicon' reverse 
                    onPress={()=>{ this.getThumbnail() }}
                />
            </View>
            <View style={{backgroundColor:'blue'}}>
                <Button onPress={()=>{}} title="Create"></Button>
            </View>
            {/* add camera */}
        </View>
        
        
    );
    }
}

export default CreateBoard;