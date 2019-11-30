import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: '#181A24',
    },
    bodyLight: {
        backgroundColor: 'white'
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        paddingBottom: 20,
        textDecorationLine: 'underline'
    },
    text: {
        textAlign: 'left',
        fontSize: 20,
        color: 'white',
    },
    textLight: {
        textAlign: 'left',
        fontSize: 20,
        color: 'black',
    },
    boards: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
        backgroundColor: '#181A24',
        paddingTop:20,
        paddingBottom:20,
        marginLeft: 15,
        marginRight: 15,
        
    },
    boardsLight: {
        marginBottom: 0.5,
        borderBottomWidth: 0.2,
        borderBottomColor: 'black',
        backgroundColor: 'white',
        paddingTop:20,
        paddingBottom:20,
        marginLeft: 15,
        marginRight: 15,
        
    }
});