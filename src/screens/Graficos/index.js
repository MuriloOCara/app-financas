import { Text, StyleSheet, View} from 'react-native';
import styles from './style';
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AreaChart } from 'react-native-svg-charts';
import { Line } from 'react-native-svg';
import { Grid } from 'react-native-svg-charts';

export default function Graficos() {


  const [valores, setValores] = useState([])

 
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]


const keys = ['Gasto Fixo', 'Gasto Variável', 'Outras Despesas', 'Outras Entradas']
const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']

  return (
    <View>
       <AreaChart
            style={{ height: 200, width:200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
     
            svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}>
            <Line />
            <Grid />
        </AreaChart>

    </View>
  );
}
