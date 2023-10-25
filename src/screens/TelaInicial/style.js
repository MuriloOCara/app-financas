import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  movimentacoes: {
 flexDirection:'row',
 justifyContent:'space-between',
 gap:15
  },
texto: {
  textAlign:'center',
  color:'white',
  fontSize:24,
  fontWeight:'bold',
},

valor: {
  textAlign:'center',
  fontSize:24,
  fontWeight:'bold',

},

entradaContainer: {
  backgroundColor:'#6CE262',
 width:300,
  paddingVertical:50,
borderRadius:20
  
},

balancoContainer:{
  width:300,
  paddingVertical:50,
  backgroundColor:'#4e95bf',
  marginLeft:20,
  borderRadius:20

},

saidaContainer: {
  width:300,
  paddingVertical:50,
  backgroundColor:'#FF7E7E',
  borderRadius:20
},

restanteContainer: {
 width:300,
  paddingVertical:50,
  backgroundColor:'#b1b1b1',
  marginRight:20,
  borderRadius:20
},

titulo: {

paddingVertical:20,
textAlign:'center',
fontWeight:'bold',
fontSize:18,
color:'white'
},

tituloContainer: {

backgroundColor:'#262626',
padding:10

}


});
export default styles