
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';
import styleFunction from './style';

function CardHistorico(props) {


var config = 0
if(props.categoriaSelecionada == 'Entrada'){
  config = {nome: 'Saida', cor:'#6CE262', corEscura: '#3C673B'}

} else {
  config = {nome: 'Entrada', cor:'#FF7E7E', corEscura: '#FF0000'}
}

const style = styleFunction(config.cor, config.corEscura)

 




  return (

<View style={style.movimentacaoContainer}>

  
{props.fixo ? <Text style={style.categoria}>{props.categoriaSelecionada} Fixa</Text> : <Text style={style.categoria}>{props.categoriaSelecionada}</Text> }
<Text style={style.texto}>{props.texto}</Text>



<Text style={style.valor}>R$ {props.valor}</Text>


    
</View>
  )};



 
  



     export default React.memo(CardHistorico)