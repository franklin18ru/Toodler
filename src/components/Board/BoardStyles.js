import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: '#181A24',
        flex: 1,
        flexDirection:'column',
        justifyContent:'center'
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        paddingBottom: 20,
        textDecorationLine: 'underline'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },

    boards: {
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: '#272936',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:100,
        paddingRight:100, 
        
    }
});