import { Text, StyleSheet, View} from 'react-native';
import styles from './style';
import { useState, useEffect, useCallback } from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie } from 'victory-native';
import RNPickerSelect from 'react-native-picker-select'
import { busca } from '../../services/Transacao';


export default function Graficos() {



const [grafico, setGrafico] = useState(null)
const [data, setData] = useState([])
const [calculoFinal, setCalculoFinal] = useState([])
 
 useEffect(() => {
async function buscar(){
  const response = await busca()

  const filtroSaidaTotal = response.filter((item) => item.categoria == 'Saida')
  const somaSaidaTotal = filtroSaidaTotal.map((item) => item.valor)
  const filtroEntradaTotal = response.filter((item) => item.categoria == 'Entrada')
  const somaEntradaTotal = filtroEntradaTotal.map((item) => item.valor)
  const qtdMeses = response.filter((item) => item.data != null)
  console.log(qtdMeses)


  setCalculoFinal([
    {
  x:'Entrada', y: arrayCalcular(somaEntradaTotal)},
{ x:'Saida', y: arrayCalcular(somaSaidaTotal)}

  ])

}

buscar()

 }, [data])

 function arrayCalcular(array){
  var soma = 0;
for(let i = 0; i < array.length; i ++){
soma = soma + array[i]
}
return soma
}



const keys = ['Gasto Fixo', 'Gasto Variável', 'Outras Despesas', 'Outras Entradas']
const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']

  return (
    <View style={{backgroundColor:'#21222C', flex:1,alignItems:'center'}}>


      
        
      
        
        <RNPickerSelect
            onValueChange={(grafico) => setGrafico(grafico)}
        placeholder={{ label: "Selecione o gráfico.", value: grafico}}
            items={[
      
            ]}
  
        />
            
    </View>
  );
}


// grafico circular entradas e despesas totais <VictoryPie data={calculoFinal} theme={VictoryTheme.material} />

// grafico chart entradas e saidas ao longo do tempo   

// <VictoryChart width={350} theme={VictoryTheme.material}>
  //        <VictoryBar data={data} x="quarter" y="earnings" />
    //      </VictoryChart>
