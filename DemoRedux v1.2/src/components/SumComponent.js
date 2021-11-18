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
            type: 'TINHTOAN'
        });
    }


    render(){
        return(
            <View >
                <View style={styleSumComponent.container}>
                    <View>
                        <Text style={styleSumComponent.add}>Số thứ nhất</Text>
                        <TextInput defaultValue={'0'} style={styleSumComponent.num}
                        onChangeText={num1 =>{this.setState({num1})}}>
                            
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styleSumComponent.add}>Số thứ hai</Text>
                        <TextInput defaultValue={'0'} style={styleSumComponent.num}
                        onChangeText={num2=>this.setState({num2})}>
                            
                        </TextInput>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styleSumComponent.btn} onPress={this.tinhTong}>
                        <Text style={[styleSumComponent.text, {backgroundColor: '#e4fa8c'}]}>Tính toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



export default connect()(SumComponent);