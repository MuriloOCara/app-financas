
import { Text, View, FlatList, SafeAreaView, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './style'
import Card from '../../components/Card/index'
import { criaTabela } from '../../services/Transacao';
import { buscaData } from '../../services/Transacao';
import Inserir from '../Inserir';
import { busca } from '../../services/Transacao';
import { useFonts } from 'expo-font';

export default function TelaInicial({ navigation }) {
  const [data, setData] = useState([])
  const [balanco, setBalanco] = useState()
  const [valores, setValores] = useState({
    entrada:0,
saida: 0,
total: 0,
  })

const [periodo, setPeriodo] =  useState(0)




  useEffect(() => {
setPeriodo(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
    criaTabela()
  
  async function mostra() {
  const data =  await buscaData(periodo)
  setData(data)
  }
  async function calcular(){
    const filtroSaida = data.filter((item) => item.categoria == 'Saida')
    const somaSaida = filtroSaida.map((item) => item.valor)
    const filtroEntrada = data.filter((item) => item.categoria == 'Entrada')
    const somaEntrada = filtroEntrada.map((item) => item.valor)
    
    const total = await busca()
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
    <Text style={styles.titulo}>Olá, {valores.nome}! Aqui estão as suas movimentações do mês!</Text>
  
    </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height:160, marginBottom:10, marginTop:120, position:'absolute'}}>
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
  
  
    <Inserir />
    <FlatList
  style={{marginTop:0}}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Card texto={item.texto} categoriaSelecionada={item.categoria} valor={item.valor} id={item.id} />}

    >
    
    </FlatList>

 
  </SafeAreaView>

);
}