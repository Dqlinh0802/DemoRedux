import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
// import SumComponent from './components/SumComponent';
import { connect } from 'react-redux';


class Tong extends Component {
    render(){
        return(
            <View>
                <Text style={styles.text}>
                    { this.props.tong }
                </Text>
            </View>
        )
    }
}

function stateToProps(state){
    return { tong: state.tong};
}

export default connect(stateToProps)(Tong);

const styles = StyleSheet.create({
    text: {
        fontSize: 50, 
        fontWeight: 'bold', 
        color: 'black',
        textAlign: 'center',
    },
})