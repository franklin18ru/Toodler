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
        flexDirection:'column',
        flexGrow: 0.3,
        borderRadius: 10,
        width: minWidth - 50,
        backgroundColor: 'white',
        padding: 40,

    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'black',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
        paddingLeft: 10
    },
    
});