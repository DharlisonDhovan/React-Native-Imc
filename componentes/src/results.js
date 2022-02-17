import React from "react";
import {
    Text,
    View,
    StyleSheet,

    } from 'react-native'


export default function Results(props){
return(
    <View style={Styles.container}>
        <View style={Styles.containerResult}>

        <Text style={{fontSize:25,color:'#fff'}}>SEU IMC</Text>
        <Text style={Styles.resultStyle}>{props.resultImc}</Text>

        </View>
    </View>
)}
const Styles=StyleSheet.create(
    {
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#2596be',
        alignItems:'center',
        bottom:100
        },
    containerResult:{
        backgroundColor:'#4dbcd8',
        width:200,
        height:200,
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        
    },
    resultStyle:{
        fontSize:50,
        color:'#fff'
    }
    }
)