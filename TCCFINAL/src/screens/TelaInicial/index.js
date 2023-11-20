
import { Text, View, FlatList, SafeAreaView, ScrollView, Pressable, ActivityIndicator, Image } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './style'
import Card from '../../components/Card/index'
import { buscaRender, create, criaTabela } from '../../services/Transacao';
import Inserir from '../Inserir';
import { busca } from '../../services/Transacao';
import { UserContexto } from '../../contexts/user';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ValorContainer from '../../components/ValorContainer';
import { deletar } from '../../services/Transacao';


export default function TelaInicial({ navigation }) {
  const [data, setData] = useState([])
  const [balanco, setBalanco] = useState()
  const [valores, setValores] = useState({
    entrada:0,
saida: 0,
total: 0,
  })


const {usuario, login} = useContext(UserContexto)

const [periodo, setPeriodo] =  useState(0)
const [transacao, setTransacao] = useState()


  useEffect(() => {
setPeriodo(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
    criaTabela()



  
  async function mostra() {
  const data =  await buscaRender(periodo, usuario.id)
  setData( data)
  
  }
  async function calcular(){


    const filtroSaida = data.filter((item) => item.categoria == 'Saida')
    const filtroEntrada = data.filter((item) => item.categoria == 'Entrada')
    const total = await busca(usuario.id)
    const filtroSaidaTotal = total.filter((item) => item.categoria == 'Saida')
 
    const filtroEntradaTotal = total.filter((item) => item.categoria == 'Entrada')
const item = {
  nome: usuario.nome,
  imagem: usuario.imagem,
  id: usuario.id,
  transacoes: total
}
    
  login(item)
  

  


setBalanco(arrayCalcular(filtroEntradaTotal) - arrayCalcular(filtroSaidaTotal))  

    setValores({
    entrada: arrayCalcular(filtroEntrada),
    saida: arrayCalcular(filtroSaida),
    total: arrayCalcular(filtroEntrada) - arrayCalcular(filtroSaida)
    
    })
    


  }



  calcular()

  
  mostra()


  
  }, [data])




function arrayCalcular(array){
  var soma = 0;
for(let i = 0; i < array.length; i ++){
soma = soma + array[i].valor
}
return soma
}





return (
  <SafeAreaView style={{flex:1, backgroundColor:'#21222C', paddingHorizontal:20}}>
     
    <View style={styles.tituloContainer}>
      <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', gap:20}}>
        <Image style={{borderRadius:100}} width={100} height={100} source={{uri: usuario.imagem}} />
      <Text style={styles.titulo}>{usuario.nome}</Text>

  
      </View>

<View style={{alignItems:'center', position:'absolute', right:20, top:25}}>
      <TouchableOpacity onPress={() => {navigation.navigate('Conta')}}>
      <Entypo name='arrow-left' size={50} color={'#FF0000'}/>
   
      <Text style={{textAlign:'center', color:'white', fontSize:18, fontWeight:'700'}}>Sair</Text>
      </TouchableOpacity>
      </View>
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{maxHeight:180, height:180, minHeight:180}}>
    <View style={styles.movimentacoes}>
    <ValorContainer tipo={'Balanço'} valor={balanco}/>
    <ValorContainer tipo={'Entrada'} valor={valores.entrada}/>
    <ValorContainer tipo={'Saida'} valor={valores.saida}/>
    <ValorContainer tipo={'Restante'} valor={valores.total}/>

    </View>
    </ScrollView>
  
  

    <FlatList

      data={data}
      keyExtractor={item => item.id}
      renderItem={( item ) => <Card {...item} setTransacao={setTransacao} onDelete={() => {
deletar(item.item.id)
      }}/>}
maxToRenderPerBatch={15}
ListHeaderComponent={    <Inserir transacaoSelecionada={transacao} setTransacao={setTransacao}/>}
    >
    
    </FlatList>

 
  </SafeAreaView>

);
}