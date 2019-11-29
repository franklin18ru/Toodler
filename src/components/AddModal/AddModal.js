import React from 'react';
import {Entypo} from '@expo/vector-icons';
import NativeModal from 'react-native-modal';
import { Text, TouchableHighlight, View } from 'react-native';
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
        <Text>Gunnar</Text>
    </View>

    </NativeModal>

);

export default AddModal;