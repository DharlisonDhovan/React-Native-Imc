import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  SafeAreaView,
  
  
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import Result from './results'
import Styles from "./Styles";

 function form(){

  const [modal,setModal]=useState(true)
  const [height, setHeigth]=useState('')
  const [weight, setWeight]=useState('')
  const [imc, setImc]=useState('')
  

    function calculoImc(){
      return setImc((weight/((height/100)*(height/100))).toFixed(2))
    }

    function validation(){
      if(weight !='' && height!=''){
        calculoImc()
        setModal(true)
        return
      }
     }
    
     function Return(){
      setWeight('')
      setHeigth('')
      setModal(false)

    }
    return(
    <View style={Styles.containerForm}>
        <View style={Styles.containerInput}> 
            
            <Text style={Styles.heightText}><Ionicons style={Styles.icon} name="arrow-up-outline" size={25}></Ionicons> Altura</Text>
            
            <TextInput style={Styles.TextInput}
            keyboardType="numeric"
            placeholder="Ex.170(cm)"
            value={height}
            onChangeText={setHeigth}
            />
            
            <Text style={Styles.widthText}><Ionicons style={Styles.icon} name="barbell-outline" size={25}></Ionicons> Peso</Text>
            
            <TextInput style={Styles.TextInput}
            keyboardType="numeric"
            placeholder="Ex.65(Kg)"
            value={weight}
            onChangeText={setWeight}
            /> 
        </View>
        
        <View>
          <TouchableOpacity style={Styles.button} onPress={validation} >
              
          <Text style={Styles.buttonText}>Calcular</Text>

          </TouchableOpacity>
        </View>

        <Modal  animationType="slide" transparent={false} visible={modal} >
          <View style={Styles.viewArrow}>
          <TouchableOpacity style={Styles.arrowBack} onPress={Return}>
              <Ionicons style={Styles.arrowBack} size={35} name="md-arrow-back" />
            </TouchableOpacity>
          </View>
            
          <SafeAreaView style={Styles.areaViewModal}>
           
            <View>
              
              <Result resultImc={imc}/>
            
            </View>
        
          </SafeAreaView>

        </Modal>

    </View>
    )
}
export default form;