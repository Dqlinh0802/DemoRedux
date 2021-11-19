import { StyleSheet } from "react-native";
const styleSumComponent = StyleSheet.create({
    num: {
        backgroundColor: 'pink',
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        height: 40,
        width: 100,
        marginLeft: 10,
    },
    container:{
        flexDirection: 'row'
    },
    add:{
        fontSize: 15,
        justifyContent: 'center',
        color: 'black',
        marginLeft: 20,
    },
    btn:{
        marginTop: 20,
        backgroundColor: '#e4fa8c',
        alignItems: 'center',
        borderRadius: 15,
        height: 40,
        justifyContent: 'center',
        marginRight: 2,
        marginLeft: 2,
    },
    text:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#a6a2a2',
    },
});
export default styleSumComponent;