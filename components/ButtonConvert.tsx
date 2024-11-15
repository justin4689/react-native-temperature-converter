import { View, Text,Pressable , StyleSheet} from 'react-native'
import React from 'react'
type Props = {
    onPress: () =>  void,
    unit: string
}

const ButtonConvert = ({onPress,unit}:Props) => {
  return (
    <Pressable style= {styles.btn} onPress={onPress}>
      <Text style= {styles.text}>Convertir en {unit}</Text>
      </Pressable>
  )
}


const styles =  StyleSheet.create({
    btn:{
        backgroundColor : 'black',
        paddingHorizontal : 40 , 
        paddingVertical : 20, 
        borderRadius : 30,
        width:250

    },
     text : {
        color : 'white',
        textAlign: 'center'
     }
})
export default ButtonConvert