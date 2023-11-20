
import { Text, StyleSheet, View, Button, Pressable, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { useState, useEffect, useCallback } from 'react';
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native'
import { Modal } from 'react-native';
import { Image } from 'react-native';
import { create } from '../../services/User';
import { Context } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function CriarConta() {

    const [modalVisivel, setModalVisivel] = useState(false)

const [nome, setNome] = useState('')
const [imagem, setImagem] = useState(null)


async function selecionarImagem() {

  const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if(!status) {
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64:true
    });

  
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  
  
  
  }
  





async function salvar(){
  console.log(imagem)
    const objeto = {
        imagem: imagem,
        nome: nome.charAt(0).toUpperCase() + nome.slice(1)
    }

    if(objeto.imagem && objeto.nome){

await create(objeto)
    } else {
      Alert.alert('Erro na criação do perfil', 'Preencha os campos corretamente')
    }
}

function reset() {
    setNome("");
    setImagem("");
    setModalVisivel(false);
  }
  
  
  return (

 
 <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(false);
        }}
      >
        <View style={styles.container}>
          <View style={styles.fundoCaixa}>
            <View style={{ justifyContent: "center"}}>
              <Text style={styles.titulo}>Novo Perfil</Text>

        
            </View>

            <View
              style={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >

   <View
              style={{

            
              marginTop:15
              }}
            >
     
              <View style={{alignItems:'center', marginLeft:15, marginVertical:10}}>
        
          
              </View>
            </View>
            </View>

            <View
              style={{
                justifyContent:'center',
             gap:10,
                flexDirection: "row",
                alignItems: "center",
                marginBottom:30
              }}
            >
              <View
                style={styles.inserirNome}
              >
                      <TextInput  placeholder='Insira seu nome' style={{textAlign:'center'}} onChangeText={(item) => setNome(item)}/>
           
             
              </View >
              <View>
              <Pressable onPress={() => selecionarImagem()} ><Entypo name='image' size={45} color={'white'}/></Pressable>
              </View>
            </View>
         
<View style={{flexDirection:'row', justifyContent:'space-around'}}>

<Pressable
              onPress={() => {
           setModalVisivel(false)
            
              }}
            >
              <Text style={styles.botaoCancelar}>
                <Entypo size={18} name="cross" />
                Cancelar
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                salvar();
            reset();
              }}
            >
              <Text style={styles.botaoSalvar}>
                <Entypo size={18} name="check"/>
                Salvar
              </Text>
            </Pressable>
       
            </View>
          </View>
        </View>
      </Modal>



    <Pressable onPress={() => setModalVisivel(true)} style={styles.novoPerfilContainer}><Text style={styles.novoPerfil}>Novo Perfil</Text></Pressable>


   
    </View>
   
  
 

  )
}

