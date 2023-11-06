
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import {useState, useEffect, useCallback} from 'react';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import { criaTabela } from '../../services/Transacao';
import { busca } from '../../services/Transacao';
import { deletar } from '../../services/Transacao';
import React from 'react';

function Card(props) {


var config = 0
if(props.categoriaSelecionada == 'Entrada'){
  config = {nome: 'Saida', cor:'#6CE262', corEscura: '#3C673B'}

} else {
  config = {nome: 'Entrada', cor:'#FF7E7E', corEscura: '#FF0000'}
}

const style = styleFunction(config.cor, config.corEscura)

 




  return (

<View style={style.movimentacaoContainer}>
<Text style={style.categoria}>{props.categoriaSelecionada}</Text>
<Text style={style.texto}>{props.texto}</Text>



<Text style={style.valor}>{props.valor}</Text>


    
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
       left:300,
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


     export default React.memo(Card)