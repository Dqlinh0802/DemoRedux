import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
// import SumComponent from './components/SumComponent';
import { connect } from 'react-redux';


class Thuong extends Component {
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    { this.props.thuong }
                </Text>
            </View>
        )
    }
}

function stateToProps(state){
    return { thuong: state.thuong};
}

export default connect(stateToProps)(Thuong);

const styles = StyleSheet.create({
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'black',
        textAlign: 'center',
    },
})