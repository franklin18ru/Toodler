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

    boards: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#272936',
        paddingRight:35, 
        maxWidth: 250
        
    },
    
   
    icon: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        textAlign: 'right',
        
    },
    test: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: '#272936',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40, 
        
    },


});

