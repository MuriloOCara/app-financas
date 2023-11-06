import { Text, StyleSheet, View} from 'react-native';
import styles from './style';
import { useState, useEffect, useCallback } from 'react';

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
 

    </View>
  );
}
