
import { Text, StyleSheet, View, Button, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { useState, useEffect, useCallback } from 'react';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-paper'
export default function Conta({ navigation }) {


  const [balanco, setBalanco] = useState(null)
  const [status, setStatus] = useState(null)
  const [nome, setNome] = useState(null)


  async function salvar() {
    if (balanco != null && balanco != '' && balanco != undefined && nome != null && nome != '' && nome != undefined) {
      await AsyncStorage.setItem('@helpfinancas:balanco', JSON.stringify(balanco))
      await AsyncStorage.setItem('@helpfinancas:nome', JSON.stringify(nome))

      navigation.navigate('Tela Inicial')
    } else {
      setStatus('Insira um nome e o seu balanço.')
    }


  }

  async function verificar() {
    const verificacao = await AsyncStorage.getItem('@helpfinancas:balanco')
    if (verificacao != null) {
      navigation.navigate('Tela Inicial')
    }
  }

  useEffect(() => {
    verificar()
  })




  return (



    <View>

      <TextInput onChangeText={(valor) => { setNome(valor) }} placeholder='Insira o seu nome.' />
      <TextInput keyboardType='numeric' onChangeText={(valor) => { setBalanco(valor) }} placeholder='Insira o seu dinheiro atual.' />


      <Button title='Continuar' onPress={() => {
        salvar()


      }} />

      <Text>{status}</Text>

    </View>

  )
}

