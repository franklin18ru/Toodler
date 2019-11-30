import React from 'react';
import NativeModal from 'react-native-modal';
import { Button, TextInput, Image, KeyboardAvoidingView  } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';




const AddModal = ({ isOpen, closeModal, action, name, photo, takePhoto, inputHandler, hasTakenPhoto, children})=> (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style={styles.modal}
    >
    <KeyboardAvoidingView style={styles.body} behavior="padding">
            
            <TextInput style={ styles.textInput }
                placeholder='Enter board name here'
                autoCapitalize='sentences'
                autoCompleteType='name'
                
                onChangeText={ text => inputHandler('newBoardName',text) }
            />
            
                {hasTakenPhoto() ? <Image style={styles.img} source={{uri: photo}}/>  : null }
                <Icon 
                    name='ios-camera' color='#181A24' type='ionicon' reverse 
                    onPress={()=>{ takePhoto() }}
                />
            <Button style={styles.buttonStyle} onPress={()=>{action()}} title="Create"></Button>
        
    </KeyboardAvoidingView>

    </NativeModal>

);

export default AddModal;