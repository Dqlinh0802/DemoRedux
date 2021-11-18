import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
// import SumComponent from './components/SumComponent';
import { connect } from 'react-redux';


class Tich extends Component {
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    { this.props.tich }
                </Text>
            </View>
        )
    }
}

function stateToProps(state){
    return { tich: state.tich};
}

export default connect(stateToProps)(Tich);

const styles = StyleSheet.create({
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'black',
        textAlign: 'center',
    },
})