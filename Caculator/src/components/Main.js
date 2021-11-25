import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from "../styles/boxNumber";
import TouchableOpacitys from "./TouchableOpacitys";
import { connect } from 'react-redux';

class Main extends Component{

    // constructor(props){
    //     super(props);
    //     this.state={
    //         num: 0
    //     };
    // }
    // setInput = (a) => {
    //     const num = this.state;
    //     num: num+a;
    // }

    render(){
        return(
            <View>
                <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', marginBottom: 20, marginTop: 20}}>Caculator</Text>
                
                <Text style={styles.input}>
                    {this.props.myValue}
                </Text>

                <TouchableOpacitys />

            </View>
        )
    }
}

function stateToProps(state){
    return { myValue: state.value }
}

export default connect(stateToProps)(Main)
