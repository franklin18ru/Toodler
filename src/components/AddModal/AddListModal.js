import React from 'react';
import NativeModal from 'react-native-modal';
import { Text, View, Button, TextInput  } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import { takePhoto } from '../TakePhoto/TakePhoto2';
import ColorPalette from 'react-native-color-palette';




const AddModal = ({ isOpen, closeModal,inputHandler, action, selectedColor,changeColor, children})=> (
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
            placeholder='Enter list name here'
            autoCapitalize='sentences'
            autoCompleteType='name'
            
            onChangeText={ text => inputHandler('newListName',text) }
        />
    <ColorPalette
        onChange={colorChange => changeColor(colorChange)}
        value={selectedColor}
        colors={['red', 'blue', 'green', 'pink', 'purple','black','maroon','cyan']}
        title={"Choose color:"}
        icon={
            
            <Icon 
            name='md-checkmark' size={25} color={'transparent'}   type='ionicon' reverse 
            />

        
        }
    />
    <Button onPress={()=>{action(selectedColor)}} title="Create"></Button>
    </View>

    </NativeModal>

);

export default AddModal;