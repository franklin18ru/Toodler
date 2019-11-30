import React from 'react';
import NativeModal from 'react-native-modal';
import { Text, View, Button, TextInput  } from 'react-native';
import styles from './styles';






const AddModal = ({ isOpen, closeModal, inputHandler, action, children})=> (
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
            placeholder='Enter task name here'
            autoCapitalize='sentences'
            autoCompleteType='name'
            
            onChangeText={ text => inputHandler('newTaskName',text) }
        />
        <Text>------------------------------------------------</Text>
        <TextInput style={ styles.textInput }
            placeholder='Enter description here'
            autoCapitalize='sentences'
            autoCompleteType='name'
            
            onChangeText={ text => inputHandler('newTaskdescripition',text) }
        />
        {/*  */}
        <Button onPress={()=>{action()}} title="Create"></Button>
    </View>

    </NativeModal>

);

export default AddModal;