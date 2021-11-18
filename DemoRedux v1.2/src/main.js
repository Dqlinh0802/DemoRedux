import React, { Component } from "react";
import {Text, View, StyleSheet} from 'react-native';
import SumComponent from './components/SumComponent';
import Tong from './components/Tong';
import Hieu from "./components/Hieu";
import Tich from "./components/Tich";
import Thuong from "./components/Thuong";

export default class Main extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Demo rn redux
                </Text>

                <SumComponent />

                <View style={[styles.rectangle, {marginTop: 20}]}>
                    <Text style={styles.text}>Tổng</Text>
                    <Tong />
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Hiệu</Text>
                    <Hieu />
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Tích</Text>
                    <Tich />
                </View>
                <View style={[styles.rectangle, styles.line]}></View>
                <View style={styles.rectangle}>
                    <Text style={styles.text}>Thương</Text>
                    <Thuong />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a3f7ba',
        height: '100%',
    },
    title:{
        color: 'black',
        textTransform: "uppercase",
        fontSize: 25,
        fontWeight: 'bold',
    },
    rectangle:{
        borderColor: 'black',
        borderWidth: 2,
        width: 250,
        height: 100,
    },
    text:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    line:{
        width: 1,
        height: 20,
        borderWidth:1,
    },
});