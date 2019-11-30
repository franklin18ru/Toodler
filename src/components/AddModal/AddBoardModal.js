import React from 'react';
import NativeModal from 'react-native-modal';
import { Text, View, Button, TextInput, Image  } from 'react-native';
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
    <View style={styles.body}>
        
            <TextInput style={ styles.textInput }
                placeholder='Enter board name here'
                autoCapitalize='sentences'
                autoCompleteType='name'
                
                onChangeText={ text => inputHandler('newBoardName',text) }
            />
            {hasTakenPhoto() ? <Image style={{width: 50, height: 50}} source={{uri: photo}}/>  : null }
            <Icon 
                name='ios-camera' color='#181A24' type='ionicon' reverse 
                onPress={()=>{ takePhoto() }}
            />
        
            <Button onPress={()=>{action()}} title="Create"></Button>
        
    </View>

    </NativeModal>

);

export default AddModal;