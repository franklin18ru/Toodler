import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        backgroundColor: '#181A24',
        flex: 1,
        flexDirection:'column',
        
    },
    container: {
        flex: 1,
    },
    plus: { 
        fontWeight:'bold',
        //alignSelf: 'flex-end',
        position: 'absolute',
        backgroundColor: "blue"
        
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        fontSize: 20,
        color: "#ffff"
    },
    toodler: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },

    toodlerLight: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        color: '#181A24',
    },
    bodyFrontPage: {
        paddingBottom:200,
        backgroundColor: '#181A24',
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    bodyFrontPageLight: {
        paddingBottom:200,
        backgroundColor: '#fffcf2',
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    switchText: {
        color: 'white',
        paddingTop: 20,
    },
    switchTextLight: {
        color: '#181A24',
        paddingTop: 20,
    },
});