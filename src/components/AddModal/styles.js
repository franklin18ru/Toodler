import { StyleSheet, Dimensions } from 'react-native';

const { width: minWidth } = Dimensions.get('window');


export default StyleSheet.create({
    modal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 0.3,
        borderRadius: 10,
        width: minWidth - 100,
        backgroundColor: 'white',
        padding: 40,

    },
});