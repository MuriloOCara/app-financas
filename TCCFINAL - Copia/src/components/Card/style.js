import {StyleSheet} from 'react-native'

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
  width:115,
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
    borderRadius:20
  
  },
  
  valor: {
    color:corEscura,
    fontWeight:'700',
    position:'absolute',
    bottom:'50%',
    left:'40%',
    fontSize:20,
    flexWrap:'wrap'
  },
  
  loading:{
    color:corEscura
  }
  
  
  })
export default styleFunction