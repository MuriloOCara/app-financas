import {StyleSheet} from 'react-native'

const styleFunction = (cor, corEscura) => StyleSheet.create({
container : {
  width:300,
  paddingVertical:50,
borderRadius:20,
backgroundColor:cor
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
  color:corEscura,
}
  
  })
export default styleFunction