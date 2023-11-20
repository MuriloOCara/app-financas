
import { Text, StyleSheet, View, Button, TouchableOpacity, ActivityIndicator, Pressable, Image } from 'react-native';
import React from 'react';
import kratos from '../../../assets/kratos.jpg'
import styleFunction from './style';
import Entypo from 'react-native-vector-icons/Entypo';

function ValorContainer(props) {

  var config = {}
if(props.tipo == 'Balanço') {
config = {cor: '#4e95bf', corEscura: '#00487C'}
} else if (props.tipo == 'Entrada') {
  config = {cor: '#6CE262', corEscura: '#3C673B'}
} else if (props.tipo == 'Saida') {
  config = {cor: '#FF7E7E', corEscura: '#FF0000'}
} else if (props.tipo == 'Restante'){
  config = {cor: '#b1b1b1', corEscura: 'black'}
}

const styles = styleFunction(config.cor, config.corEscura)

  return (
<View style={styles.container}>

 <Text style={styles.texto}>{props.tipo}</Text>
 <Text style={styles.valor}>R$ {props.valor}</Text>


    
</View>
  )};



 

     export default React.memo(ValorContainer)