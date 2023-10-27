
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import {useState, useEffect, useCallback} from 'react';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import { criaTabela } from '../../services/Transacao';
import { busca } from '../../services/Transacao';
import { deletar } from '../../services/Transacao';

export default function Card(props) {
const [mes, setMes] = useState(new Date().getMonth() + 1)
const {id} = props
const [isLoading, setIsLoading] = useState(false)

var config = 0
if(props.categoriaSelecionada == 'Saida'){
  config = {nome: 'Saida', cor:'#FF7E7E', corEscura: '#FF0000'}

} else {
  config = {nome: 'Entrada', cor:'#6CE262', corEscura: '#3C673B'}
}

const style = styleFunction(config.cor, config.corEscura)



async function excluir(){
setIsLoading(true)
await deletar(id)

}

  return (

<View style={style.movimentacaoContainer}>
{props.fixo ? <Text style={style.categoria}>{props.categoriaSelecionada} Fixa</Text> : <Text style={style.categoria}>{props.categoriaSelecionada}</Text>}
<Text style={style.texto}>{props.texto}</Text>



<Text style={style.valor}>{props.valor}</Text>
{
isLoading ? <ActivityIndicator size={25} style={style.lixo} color={style.loading.color}/> : <Pressable onPress={excluir} style={style.lixo}><Entypo name='trash' size={25} color='red'/></Pressable>

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

lixo: {
  marginLeft:'auto', 
  position:'absolute',
  left:'85%',
bottom:'50%'

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
