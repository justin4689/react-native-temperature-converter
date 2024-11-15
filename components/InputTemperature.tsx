import { View, Text,TextInput ,KeyboardAvoidingView,StyleSheet } from 'react-native'
import React from 'react'

 type Props = {
    onChangeText: (text: string) => void
    value: string
    unit : string
 }
const InputTemperature = ({onChangeText , value ,unit}: Props) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
        
    <TextInput placeholder='Tape une témperature' style ={styles.input} keyboardType='numeric' maxLength={4} onChangeText={onChangeText} value= {value} />
    <Text style={styles.unit}>{unit}</Text>
    
    </KeyboardAvoidingView>
  )
}

 const styles = StyleSheet.create({

     container: {
    alignItems: 'center',
     },
    input: {
      backgroundColor: 'white',
      borderRadius: 20,
      width: 350,
     
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      paddingLeft: 20,
      fontSize: 17,
      position: 'relative',
    },
    unit : {
        position: 'absolute',
        right: 25,
        top: 22,
        
        fontSize: 20,
        fontWeight: 'bold',

    }
   
 })

export default InputTemperature