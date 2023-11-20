import {StyleSheet} from 'react-native'

const styleFunction = (objConfig) => StyleSheet.create({
desejoContainer: {
  flexDirection:'row',
  justifyContent:'space-between',
backgroundColor:objConfig.backgroundColor,
paddingVertical:10,
borderRadius:10,
marginBottom:10

},

descricao: {
    fontSize:18,
    marginLeft:10,
    color:'white',
    fontWeight:'bold',
    flexWrap:'wrap',
    width:200,
    marginVertical:10
},
preco: {
fontSize:18,
marginRight:10,
color:'white',
fontWeight:'bold',
position:'absolute',
right:0,
top:'50%',
},

menu: {
  position:'absolute',
  right:10,
  top:0
}

});
export default styleFunction