import { Text, View, FlatList, Button, ActivityIndicator } from 'react-native';


import {useState, useEffect} from 'react';
import styles from './style'
import RNPickerSelect from 'react-native-picker-select'
import CardHistorico from '../../components/CardHistorico/index'
import { busca } from '../../services/Transacao';
import { criaTabela } from '../../services/Transacao';
import { buscaData } from '../../services/Transacao';

export default function Historico({navigation}) {
 const [tempo, setTempo] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
 const [data, setData] = useState([])
 const [valores, setValores] = useState({
  entrada:0,
saida: 0,
total: 0,
})
const [balanco, setBalanco] = useState(0)
const [mes, setMes] = useState(new Date().getMonth() + 1)
const [ano, setAno] = useState(new Date().getFullYear())
const [isLoading, setIsLoading] = useState(false)


useEffect(() => {
 
  criaTabela()



async function mostra() {
  setTempo(`${ano}-${mes}`)
const data =  await buscaData(tempo)
setData(data)

}

async function calcular(){
  const filtroSaida = data.filter((item) => item.categoria == 'Saida')
  const somaSaida = filtroSaida.map((item) => item.valor)
  const filtroEntrada = data.filter((item) => item.categoria == 'Entrada')
  const somaEntrada = filtroEntrada.map((item) => item.valor)
  
  
  setValores({
  entrada: arrayCalcular(somaEntrada),
  saida: arrayCalcular(somaSaida)
  
  })
  
  setBalanco(valores.entrada - valores.saida)


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



<View style={{flex:1,  backgroundColor:'#21222C'}}>
    <Text>Ano Selecionado: {ano}</Text>
       <RNPickerSelect
            onValueChange={(mes) => setMes(mes)}
        placeholder={{ label: "Selecione a categoria", value: mes,color:'black' }}
            items={[
                { label: 'Janeiro', value: 1 },
                { label: 'Fevereiro', value: 2 },
                { label: 'Março', value: 3 },
                  { label: 'Abril', value: 4 },
                    { label: 'Maio', value: 5 },
                      { label: 'Junho', value:  6 },
                        { label: 'Julho', value: 7 },
                          { label: 'Agosto', value: 8 },
                            { label: 'Setembro', value: 9 },
                              { label: 'Outubro', value: 10 },
                                { label: 'Novembro', value: 11 },
                                  { label: 'Dezembro', value: 12 },
            ]}
        />
<Button title={'<-'} onPress={() => {setAno(ano - 1)}}/>
<Button title={'->'} onPress={() => {setAno(ano + 1)}} />

{
isLoading ? <ActivityIndicator size={25} color={'blue'}/> : 
<FlatList 
data={data}
keyExtractor={item => item.id}
renderItem={({item}) => <CardHistorico texto={item.texto} categoriaSelecionada={item.categoria} valor={item.valor} id={item.id}/>}
/>

}



<Text>Gastos totais no mês: {valores.saida}</Text>
<Text>Entradas totais no mês: {valores.entrada}</Text>
<Text>Saldo final no mês: {balanco}</Text>

</View>

)}

