
import { Text, StyleSheet, View, Button, Pressable } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useState, useEffect, useCallback } from 'react';
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-paper'
import { FlatList } from 'react-native';
import Perfil from '../../components/Perfil';
import CriarConta from '../CriarConta';
import { buscaContas } from '../../services/User';
import { criaTabela } from '../../services/User';
import { excluirTransacoes } from '../../services/User';
import { UserContexto } from '../../contexts/user';
import { useContext } from 'react';
import { excluirUser } from '../../services/User';
import ValorContainer from '../../components/ValorContainer';

export default function Conta() {
const [data, setData] = useState([])
const navigation = useNavigation()

const {login} = useContext(UserContexto)
async function selecionarConta (obj){
 
await login(obj.item)
console.log(obj.item)
navigation.navigate('Home')
}



async function excluir(id){
await excluirUser(id)
await excluirTransacoes(id)
}


useEffect(() => {

criaTabela()

  async function buscarContas(){
    const result = await buscaContas()
setData(result)


  }
buscarContas()

}, [data])





  return (



    <View style={{backgroundColor:'#21222C', flex:1}}>
<Text style={styles.titulo}>Selecione um perfil.</Text>

<FlatList
data={data}
keyExtractor={(item) => item.id}
renderItem={( item ) => <Perfil {...item} onDelete={() => {
  excluir(item.item.id)

}}  onSelect={() => {selecionarConta(item)}

}/>}
maxToRenderPerBatch={15}
ListFooterComponent={<CriarConta />}
/>


    </View>

  )
}

