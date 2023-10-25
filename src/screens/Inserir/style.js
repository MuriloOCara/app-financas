import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end',
    borderRadius:20,
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
fontSize:20,
textAlign:'center',
marginVertical:15,
borderWidth:1,
borderRadius:10,
width:250,
borderColor:'black'


  },

  valor: {
    fontSize:18,
    textAlign:'center',
    marginBottom:15,
    borderWidth:1,
    borderRadius:10,
    width:100,
    borderColor:'black'
  },

  fundoCaixa: {
    backgroundColor:'white', 
  marginBottom:48,
  paddingTop:10,
  justifyContent:'center',
  marginHorizontal:'10%',
  borderRadius:25,
  backgroundColor:'darkgray'
}
});
export default styles