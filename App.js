import React, { useState } from "react";

import {
  KeyboardAvoidingView
} from "react-native"
import Title from './componentes/title/index'
import Form from './componentes/src/index'
import Styles from "./componentes/src/Styles";






export default function App(){
  
  return(
    
    <KeyboardAvoidingView style={Styles.container} behavior='padding' >
      <Title/>
      
      <Form/>
    </KeyboardAvoidingView>
  
  )
}
