import React from 'react';
import NativeModal from 'react-native-modal';
import { Text, View, Button, TextInput  } from 'react-native';
import styles from './styles';






const AddModal = ({ isOpen, closeModal, children})=> (
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
            
            onChangeText={ text => text }
        />
        {/* inputHandler('newTaskName',text) */}
        <Button onPress={()=>{}} title="Create"></Button>
    </View>

    </NativeModal>

);

export default AddModal;