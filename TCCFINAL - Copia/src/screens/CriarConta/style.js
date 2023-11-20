import {StyleSheet} from 'react-native'



const styles = StyleSheet.create({
  novoPerfil: {
    backgroundColor:'#4e95bf',
    color:'white',
    fontSize:20,
    padding:25,
   textAlign:'center',
   width:'90%',
   borderRadius:15,
  },

  novoPerfilContainer: {

alignItems:'center',
justifyContent:'flex-end'

  },

  titulo: {
 
    fontSize:20,
    color:'black',
    textAlign:'center',
  },

  nome: {

    color:'black',
    textAlign:'center'
  },

  container: {
    flex: 1,
    justifyContent:'flex-end',
    borderRadius:10,
    paddingTop:10,
   
  },

  categoria: {
    backgroundColor:'gray'
  },

  listaCategoria: {
    flexDirection:'column',
    justifyContent:'space-between'
  },

  toast: {
 
  },

  titulo: {
    fontSize:20,
    fontWeight:'700',
    textAlign:'center',
    color:'white'

  },

  descricao: {
fontSize:18,
textAlign:'center',
marginVertical:15,
borderWidth:1,
borderRadius:5,
width:250,
borderColor:'black',
backgroundColor:'white',


  },

  valor: {
    fontSize:18,
    textAlign:'center',
    marginBottom:15,
    borderWidth:1,
    borderRadius:5,
    width:100,
    borderColor:'black',
    backgroundColor:'white',
  

  },

  textoImagem: {

  },

  fundoCaixa: {
height:'35%',
  paddingTop:10,
  justifyContent:'center',
  marginHorizontal:'10%',
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  backgroundColor:'#262626',
  borderTopWidth:0.3,
  borderLeftWidth:0.3,
  borderRightWidth:0.3,
  borderColor:'white'

},

botaoSalvar: {
  alignSelf:'center',
  marginVertical:10,
  paddingHorizontal:20,
  paddingVertical:10,
  backgroundColor:'#6CE262',
  borderRadius:12,
  color:'white',
  fontWeight:'bold',
  fontSize:18,
  alignItems:'center'
},

botaoCancelar: {
  alignSelf:'center',
  marginVertical:10,
  paddingHorizontal:20,
  paddingVertical:10,
  backgroundColor:'#FF7E7E',
  borderRadius:12,
  color:'white',
  fontWeight:'bold',
  fontSize:18,
  alignItems:'center'
},

inserirNome: {
    
        width: 180,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        height: 40,
        justifyContent: "center",
     
     
}


});
export default styles