import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
// import SumComponent from './components/SumComponent';
import { connect } from 'react-redux';


class Hieu extends Component {
    render(){
        return(
            <Text style={styles.text}>
                { this.props.myValue }
            </Text>
        )
    }
}

function stateToProps(state){
    return { myValue: state.hieu };
}

export default connect(stateToProps)(Hieu);

const styles = StyleSheet.create({
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'black',
        textAlign: 'center',
    },
})