
import { Text, StyleSheet, View, Button } from 'react-native';
import styles from './style'
import {useState} from 'react'

export default function Calculadora({ navigation }) {

const [displayCalculadora, setDisplayCalculadora] = useState('')

function determinarCalculadora (calculadora){
if(calculadora == 'simples'){
setDisplayCalculadora(
<Text>Simples</Text>)

} else if(calculadora == 'composto'){
setDisplayCalculadora(
<Text>Composto</Text>
)
} else if (calculadora == 'economia'){
  setDisplayCalculadora(
    <Text>Economia</Text>
  )
}

}



  return (
<View>
 <Button onPress={() => {
determinarCalculadora('simples')
 }} title = 'Juros Simples'/>
  <Button onPress={() => {
determinarCalculadora('composto')
 }} title = 'Juros Compostos'/>

  <Button onPress={() => {
determinarCalculadora('economia')
 }} title = 'Calculadora de economia'/>
  {displayCalculadora}

</View>
  );
}