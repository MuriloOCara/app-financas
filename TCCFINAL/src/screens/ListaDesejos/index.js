import { Text, StyleSheet, View, FlatList} from 'react-native';
import styles from './style';
import { useState, useEffect, useCallback } from 'react';
import { busca } from '../../services/Desejos';
import Desejo from '../../components/Desejo';
import InserirDesejo from '../InserirDesejo';
import { UserContexto } from '../../contexts/user';
import { useContext } from 'react';
import { criaTabela } from '../../services/Desejos';
import { useNavigation } from '@react-navigation/native';

export default function ListaDesejos() {
const navigator = useNavigation()
  const {usuario} = useContext(UserContexto)
  const [data, setData] = useState([])

  useEffect(() => {
    criaTabela()
async function listarDesejos(){
 
const result = await busca(usuario.id)
  setData(result)
}


listarDesejos()
  }, [data])


  return (
    <View style={styles.container}>

<FlatList 
data={data}
keyExtractor={item => item.id}
renderItem={( item ) => <Desejo {...item}  onSelect={() => {navigator.navigate('Detalhes Desejo', item)}}/>}
maxToRenderPerBatch={15}
 ListHeaderComponent={<InserirDesejo/>}
/>
    
      
   
    </View>
  );
}
