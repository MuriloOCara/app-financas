
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import {useState, useEffect, useCallback} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { criaTabela } from '../../services/Transacao';
import { busca } from '../../services/Transacao';

import React from 'react'
import { Alert } from 'react-native';
import styleFunction from './style';

function Card({item, setTransacao, onDelete}) {

const {id} = item
const [isLoading, setIsLoading] = useState(false)


var config = 0
if(item.categoria == 'Saida'){
  config = {nome: 'Saida', cor:'#FF7E7E', corEscura: '#FF0000'}

} else {
  config = {nome: 'Entrada', cor:'#6CE262', corEscura: '#3C673B'}
}

const style = styleFunction(config.cor, config.corEscura)



function excluir(){
setIsLoading(true)
onDelete()
}

function editar(){
setTransacao(item)
}




  return (

<View style={style.movimentacaoContainer} key={item.id}>
<Text style={style.categoria}>{item.categoria}</Text>
<Text style={style.texto}>{item.texto}</Text>



<Text style={style.valor}>R$ {item.valor}</Text>
{
isLoading ? <ActivityIndicator size={25} style={style.botoes} color={style.loading.color}/> : 
<View style={[style.botoes, {flexDirection:'row'}]}>
<Pressable onPress={() => {editar()}}><Entypo name='pencil' size={25} color={'black'} /></Pressable>
  <Pressable onPress={() => {

 
Alert.alert(
  "Deseja excluir esta transação?",
  "Esta ação não pode ser desfeita!",
  [
    {
      text: "Cancelar",
      style: "cancel"
    },
    { 
      text: "OK", 
      onPress: () => excluir() 
    }
  ]
)}}
style={style.lixo}><Entypo name='minus' size={25} color='red'/></Pressable>

</View>
 }

    
</View>
  )};





export default React.memo(Card)
