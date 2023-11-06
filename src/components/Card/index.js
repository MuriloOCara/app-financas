
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import {useState, useEffect, useCallback} from 'react';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import { criaTabela } from '../../services/Transacao';
import { busca } from '../../services/Transacao';
import { deletar } from '../../services/Transacao';
import React from 'react'

function Card({item, setTransacao}) {

const {id} = item
const [isLoading, setIsLoading] = useState(false)

var config = 0
if(item.categoria == 'Saida'){
  config = {nome: 'Saida', cor:'#FF7E7E', corEscura: '#FF0000'}

} else {
  config = {nome: 'Entrada', cor:'#6CE262', corEscura: '#3C673B'}
}

const style = styleFunction(config.cor, config.corEscura)



async function excluir(){
setIsLoading(true)
await deletar(id)
}

async function editar(){
setTransacao(item)
}




  return (

<View style={style.movimentacaoContainer} key={item.id}>
{item.fixo ? <Text style={style.categoria}>{item.categoria} Fixa</Text> : <Text style={style.categoria}>{item.categoria}</Text>}
<Text style={style.texto}>{item.texto}</Text>



<Text style={style.valor}>{item.valor}</Text>
{
isLoading ? <ActivityIndicator size={25} style={style.botoes} color={style.loading.color}/> : 
<View style={[style.botoes, {flexDirection:'row'}]}>
<Pressable onPress={() => {editar()}}><Entypo name='pencil' size={25} color={'#3C673B'} /></Pressable>
  <Pressable onPress={excluir} style={style.lixo}><Entypo name='trash' size={25} color='red'/></Pressable>

</View>
 }

    
</View>
  )};



const styleFunction = (cor, corEscura) => StyleSheet.create({

categoria: {
 color:'white',
 fontWeight:'700',
 fontSize:20,
 marginLeft:17,
 marginBottom:5
},

texto: {
flexWrap:'wrap',
width:150,
fontSize:12,
color:'white',
marginLeft:17,
},

botoes: {
  marginLeft:'auto', 
  position:'absolute',
  left:'78%',
bottom:'50%',
gap:10

},

movimentacaoContainer: {
  backgroundColor:cor,
  paddingVertical:10,
  marginBottom:12,
  marginHorizontal:20,
  borderRadius:20

},

valor: {
  color:corEscura,
  fontWeight:'700',
  position:'absolute',
  bottom:'50%',
  left:'50%',
  fontSize:20
},

loading:{
  color:corEscura
}


})

export default React.memo(Card)
