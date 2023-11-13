
import { Text, View, FlatList, SafeAreaView, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import styles from './style'
import Card from '../../components/Card/index'
import { buscaRender, create, criaTabela } from '../../services/Transacao';
import Inserir from '../Inserir';
import { busca } from '../../services/Transacao';
import { UserContexto } from '../../contexts/user';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function TelaInicial({ navigation }) {
  const [data, setData] = useState([])
  const [balanco, setBalanco] = useState()
  const [valores, setValores] = useState({
    entrada:0,
saida: 0,
total: 0,
  })


const {usuario} = useContext(UserContexto)
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
    const somaSaida = filtroSaida.map((item) => item.valor)
    const filtroEntrada = data.filter((item) => item.categoria == 'Entrada')
    const somaEntrada = filtroEntrada.map((item) => item.valor)


    const total = await busca(usuario.id)
    const filtroSaidaTotal = total.filter((item) => item.categoria == 'Saida')
    const somaSaidaTotal = filtroSaidaTotal.map((item) => item.valor)
    const filtroEntradaTotal = total.filter((item) => item.categoria == 'Entrada')
    const somaEntradaTotal = filtroEntradaTotal.map((item) => item.valor)
    
  
  

  


setBalanco(arrayCalcular(somaEntradaTotal) - arrayCalcular(somaSaidaTotal))  

    setValores({
    entrada: arrayCalcular(somaEntrada),
    saida: arrayCalcular(somaSaida),
    total: arrayCalcular(somaEntrada) - arrayCalcular(somaSaida)
    
    })
    


  }


  calcular()

  
  mostra()


  
  }, [data])




function arrayCalcular(array){
  var soma = 0;
for(let i = 0; i < array.length; i ++){
soma = soma + array[i]
}
return soma
}





return (
  <SafeAreaView style={{flex:1, backgroundColor:'#21222C'}}>
     
    <View style={styles.tituloContainer}>
      <View style={{flexDirection:'column', alignSelf:'flex-start', marginLeft:20}}>
        <TouchableOpacity onPress={() => {navigation.navigate('Conta')}}>
      <Entypo name='arrow-left' size={50} color={'#FF0000'}/>
   
      <Text style={{textAlign:'center', color:'white', fontSize:18, fontWeight:'700'}}>Sair</Text>
      </TouchableOpacity>
      </View>

    <Text style={styles.titulo}>Bem vindo, {usuario.nome}</Text>

    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{maxHeight:180, height:180, minHeight:180}}>
    <View style={styles.movimentacoes}>
      <View style={styles.balancoContainer}>
        <Text style={styles.texto}>Balanço</Text>
        <Text style={[styles.valor, {color:'#00487C'}]}>{balanco}</Text>
      </View>

      <View style={styles.entradaContainer}>
        <Text style={styles.texto}>Entrada</Text>
        <Text style={[styles.valor, {color:'#3C673B'}]}>{valores.entrada}</Text>
      </View>

      <View style={styles.saidaContainer}>
        <Text style={styles.texto}>Saída</Text>
        <Text style={[styles.valor, {color:'#FF0000'}]}>{valores.saida}</Text>

      </View>
      <View style={styles.restanteContainer}>
        <Text style={styles.texto}>Restante</Text>
        <Text style={styles.valor}>{valores.total}</Text>
      </View>
      

    </View>
    </ScrollView>
  
  
    <Inserir transacaoSelecionada={transacao} setTransacao={setTransacao}/>
    <FlatList
  style={{marginTop:0}}
      data={data}
      keyExtractor={item => item.id}
      renderItem={( item ) => <Card {...item} setTransacao={setTransacao}/>}
maxToRenderPerBatch={15}
    >
    
    </FlatList>

 
  </SafeAreaView>

);
}