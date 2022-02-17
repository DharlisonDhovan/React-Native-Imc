import React,{useState} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function title(){

    return(
        <View style={Styles.containerTitle}>
        <Text style={Styles.title}> IMC Native </Text>
        <Ionicons style={Styles.icon} name='logo-react' size={40}></Ionicons>
      </View>
    )
}
const Styles=StyleSheet.create(
  {
    icon:{
      marginBottom:5,
      color:'#fff'
    },
    containerTitle:{
      flexDirection:'row',
      width:250,
      height:70,
      borderWidth:2,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#4dbcd8',
      
      
    },
    title:{
      fontSize:30,
      fontWeight:'bold',
      paddingBottom:5,
      color:'#fff',
      

    },
  }
)