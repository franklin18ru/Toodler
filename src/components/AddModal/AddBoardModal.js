import React from 'react';
import {Entypo} from '@expo/vector-icons';
import NativeModal from 'react-native-modal';
import { Text, TouchableHighlight, View, Button, TextInput  } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { takePhoto } from '../TakePhoto/TakePhoto2';




const AddModal = ({ isOpen, closeModal, action, name, photo, takePhoto, inputHandler, children})=> (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style={styles.modal}
    >
    <View style={styles.body}>
        <TextInput style={ styles.textInput }
            placeholder='Enter board name here'
            autoCapitalize='sentences'
            autoCompleteType='name'
            
            onChangeText={ text => inputHandler('newBoardName',text) }
        />
        <Icon 
            name='ios-camera' color='#181A24' type='ionicon' reverse 
            onPress={()=>{ photo = takePhoto() }}

        />
        <Button onPress={()=>{action(photo)}} title="Create"></Button>
    </View>

    </NativeModal>

);

export default AddModal;