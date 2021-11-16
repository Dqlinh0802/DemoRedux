import React, { Component } from "react";
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styleSumComponent from '../styles/StyleSumComponent';
import { connect } from 'react-redux';


class SumComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            num1: 0, 
            num2: 0
        };
        this.tinhTong = this.tinhTong.bind(this);
    }


    tinhTong() {
        const {num1, num2} = this.state;
        this.props.dispatch({
            num1, 
            num2, 
            type: 'SUM'
        });
    }

    render(){
        return(
            <View >
                <View style={styleSumComponent.container}>
                    <TextInput defaultValue={'0'} style={styleSumComponent.num}
                    onChangeText={num1 =>{this.setState({num1})}}>
                        
                    </TextInput>

                    <Text style={styleSumComponent.add}>+</Text>

                    <TextInput defaultValue={'0'} style={styleSumComponent.num}
                    onChangeText={num2=>this.setState({num2})}>
                         
                    </TextInput>
                </View>
                <TouchableOpacity style={styleSumComponent.btnAdd} onPress={this.tinhTong}>
                    <Text style={[styleSumComponent.text, {backgroundColor: '#e4fa8c'}]}>Tính tổng</Text>
                </TouchableOpacity>
                <Text style={[styleSumComponent.text, {marginTop: 20, height: 30}]}>
                    {this.state.tong}
                </Text>
            </View>
        )
    }
}



export default connect()(SumComponent);