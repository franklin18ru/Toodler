import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: '#181A24',
        flex: 1,
        flexDirection:'column',
        justifyContent:'center'
    },
    title: {
        fontSize: 20,
        color: 'white',
    },

    description:{
        fontSize: 15,
        color: 'white',
        paddingTop:10
    },

    finish: {
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: '#272936',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:50,
        paddingRight:50, 
    },
    boards: {
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: '#053E0B',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:50,
        paddingRight:50, 
        
    },

    checkbox: {
        flex: 1,
        paddingRight: 20,
        color: 'white'
    }


});