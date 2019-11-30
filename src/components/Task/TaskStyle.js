import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 20,
        color: 'white',
    },
    titleLight: {
        fontSize: 20,
        color: 'black',
    },

    description:{
        fontSize: 15,
        color: 'white',
        paddingTop:10
    },
    descriptionLight:{
        fontSize: 15,
        color: 'black',
        paddingTop:10
    },

    tasks: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#181A24',
        paddingRight:35, 
        maxWidth: 250
        
    },
    tasksLight: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingRight:35, 
        maxWidth: 250
        
    },
   
    icon: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        textAlign: 'right',
        
    },

    body: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'white',
        backgroundColor: '#181A24',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40, 
        
    },
    bodyLight: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
        backgroundColor: 'white',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:40,
        paddingRight:40, 
        
    },


});

