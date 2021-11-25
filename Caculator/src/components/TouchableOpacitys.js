import React, {Component, useState} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import styles from "../styles/boxNumber";
import { connect } from 'react-redux';


class TouchableOpacitys extends Component {
    
    constructor(){
        super();
        this.state={
            resultText: ""
        };
    }

    buttonPress(text) {
        console.log(text)
        this.setState({
            resultText: this.state.resultText + text
        })
    }

    buttonXoa() {
        let text = this.state.resultText.split('');
        text.pop()
        console.log(this.state.text);
        this.setState({
            resultText: text.join('')
        })
    }

    buttonClear() {
        let text = "";
        this.setState({
            resultText: text
        })
    }

    render(){
        return(
            <View>
                <Text style={styles.input}>
                    {this.state.resultText}
                </Text>
            
                <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', width: '75%'}}>
                            <View style={{flexDirection: 'row', width: '100%'}}>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#c24444'}]}
                                onPress={() => this.buttonClear()}>
                                    <Text style={styles.num}>C</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}
                                onPress={() => this.buttonPress("x")}>
                                    <Text style={styles.num}>X</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}
                                onPress={() => this.buttonPress("/")}>
                                    <Text style={styles.num}>/</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("7")}>
                                    <Text style={styles.num}>7</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("8")}>
                                    <Text style={styles.num}>8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("9")}>
                                    <Text style={styles.num}>9</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("4")}>
                                    <Text style={styles.num}>4</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("5")}>
                                    <Text style={styles.num}>5</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("6")}>
                                    <Text style={styles.num}>6</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("1")}>
                                    <Text style={styles.num}>1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("2")}>
                                    <Text style={styles.num}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress("3")}>
                                    <Text style={styles.num}>3</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={[styles.box, {width: '62%', marginRight: 6, marginLeft: 6, backgroundColor: '#25587a'}]}
                                onPress={() => this.buttonPress("0")}>
                                    <Text style={styles.num}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.box}
                                onPress={() => this.buttonPress(".")}>
                                    <Text style={[styles.num, {fontSize: 70, lineHeight: 90}]}>.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'column', width: '25%'}}>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#c24444'}]}
                            onPress={() => this.buttonXoa()}>
                                <Text style={styles.num}>Xóa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}
                            onPress={() => this.buttonPress("-")}>
                                <Text style={styles.num}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}
                            onPress={() => this.buttonPress("+")}>
                                <Text style={styles.num}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {width: '90%', height: 200, backgroundColor: '#cf7961' }]}
                            >
                                <Text style={[styles.num, 
                                    {lineHeight: 200, height: 200, fontSize: 45}]}>
                                    =
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        )
    }
}
export default connect()(TouchableOpacitys);