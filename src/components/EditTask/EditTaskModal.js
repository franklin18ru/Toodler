import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Button, Picker } from 'react-native';
import styles from './styles';




const AddModal = ({ isOpen, closeModal, currentList, allLists, changeList, action, children})=> (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style={styles.modal}
    >
    <View style={styles.body}>
        
        {/* add picker */}
        <Picker
            selectedValue={currentList}
            style={{height: 100, width: 250}}
            onValueChange={(itemValue, itemIndex) =>{
                
                changeList(itemValue);
            }}
        >
            { allLists.map(list =>{
                return(
                    <Picker.Item key={list.id} label={list.name} value={list.id} />
                )
            })}
            
        </Picker>
        <Button style={styles.buttonStyle} onPress={()=>{action()}} title="Change"></Button>
    </View>

    </NativeModal>

);

export default AddModal;