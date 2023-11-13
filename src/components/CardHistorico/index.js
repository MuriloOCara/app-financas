
import { Text, StyleSheet, View, Button, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';

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
       fontSize:20,
       flexWrap:'wrap'
     },
     
     loading:{
       color:corEscura
     }
     
     
     })



     export default React.memo(CardHistorico)