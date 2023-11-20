
import { Text, StyleSheet, View, Button, TouchableOpacity, ActivityIndicator, Pressable, Image } from 'react-native';
import React from 'react';
import kratos from '../../../assets/kratos.jpg'
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';

function Perfil({item, onSelect, onDelete }) {

 

  return (
<TouchableOpacity onPress={onSelect}>
<View style={styles.container}>

  <View style={styles.perfilContainer}>
<Image style={{width:80, height:80, borderTopLeftRadius:15, borderBottomLeftRadius:15}} source={{uri: item.imagem}} />
<Text style={styles.nome}>{item.nome}</Text>
<Pressable style={{right:'5%', position:'absolute'}} onPress={onDelete}><Entypo name='trash' size={25} color='red'/></Pressable>
</View>

    
</View>
</TouchableOpacity>
  )};



 

     export default React.memo(Perfil)