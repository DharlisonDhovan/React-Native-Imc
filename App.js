import React, { useState } from "react";

import {
  KeyboardAvoidingView
} from "react-native"
import Title from './src/componentes/title/index'
import Form from './src/componentes/index'
import Styles from "./src/componentes/Styles";






export default function App(){
  
  return(
    
    <KeyboardAvoidingView style={Styles.container} behavior='padding' >
      <Title/>
      
      <Form/>
    </KeyboardAvoidingView>
  
  )
}
