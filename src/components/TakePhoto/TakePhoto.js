import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Vibrate from '../Vibrate/Vibrate'
import { Icon } from 'react-native-elements';


/*
    This does work only thing that's left is maybe styling
    And connecting the camera button in create board show that
    when you take the picture we navigate back to create board
    component(hiding this one) but take the photo uri to create
    board component
*/

class TakePhoto extends Component {
state = {
    // hasCameraRollPermission: null,
    screenWidth: 0,
    screenHeight:0,
    hasCameraPermission: null,
    type: Camera.Constants.Type.front
}

async componentDidMount(){
    <Vibrate isRunning={true}/>
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const width = Math.round(Dimensions.get('window').width);
    const height = Math.round(Dimensions.get('window').height);
    // const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({
        // hasCameraRollPermission: statusRoll === 'granted',
        hasCameraPermission: status === 'granted',
        screenWidth: width,
        screenHeight: height,
        type: Camera.Constants.Type.back,
        flash: 'ios-flash-off',
        isFront: null,
        photo: null,
    });
}

// {width: this.state.screenWidth,height: this.state.screenHeight}

render() {
    const { hasCameraPermission } = this.state;
    return (
        
        <View style={{flex:1}}>
            
            {hasCameraPermission ? 
            
            <Camera ref={ref => {this.camera = ref;}} type={this.state.type} style={{flex:1, justifyContent:'space-between'}}>
                <View style={{backgroundColor:'transparent',paddingTop:15}}>
                    <Icon name='ios-reverse-camera' color='transparent' type='ionicon' reverse style={{color:'white',fontWeight:'bold'}}
                        onPress={()=>{
                            this.setState({type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back})
                        }}
                    />
                    <Icon name={this.state.flash} color='transparent' type='ionicon' reverse style={{color:'white',visiblity:this.state.isFront,fontWeight:'bold'}}
                        onPress={()=>{
                            this.setState({flash: this.state.flash === 'ios-flash-off' ? 'ios-flash' : 'ios-flash-off'})
                        }}
                    />
                    <Icon name='ios-radio-button-off' color='transparent' type='ionicon' reverse style={{color:'white',visiblity:this.state.isFront,fontWeight:'bold'}}
                        onPress={ async () => {
                                if (this.camera) {
                                    let photo = await this.camera.takePictureAsync();
                                    this.setState({photo: photo['uri']});
                                }
                        }}
                    />
                </View>
            </Camera>
            
            : <></>} 
            
            
        </View>
        
        
    );
    }
}

export default TakePhoto;