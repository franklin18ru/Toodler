import React from 'react';
import NativeModal from 'react-native-modal';
import { Text, View, Button, TextInput, Picker  } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';




const AddModal = ({ isOpen, closeModal, currentList, allLists, children})=> (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['up', 'down']}
        style={styles.modal}
    >
    <View style={styles.body}>
        <Text>{currentList}</Text>
        {/* add picker */}
        <Picker
            // selectedValue={currentList}
            style={{height: 50, width: 100}}
            // onValueChange={(itemValue, itemIndex) =>
            //     changeList
            // }
        >
            { allLists.map(list =>{
                return(
                    <Picker.Item key={list.id} label={list.name} value={list.name} />
                )
            })}
            
        </Picker>
    </View>

    </NativeModal>

);

export default AddModal;