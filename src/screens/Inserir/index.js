
import { Text, View, Button, Modal, Pressable } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import { TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { create } from '../../services/Transacao';
import Entypo from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import Checkbox from 'expo-checkbox';
import { atualizar } from '../../services/Transacao';

import styles from './style'

export default function Inserir({transacaoSelecionada, setTransacao}) {

  const [texto, setTexto] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [valor, setValor] = useState('')
  const [fixo, setFixo] = useState(false)
  const [data, setData] = useState(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
  const [modalVisivel, setModalVisivel] = useState(false)



  async function save() {
    if (texto != null && valor != null && categoriaSelecionada != null && texto != '' && valor != '' && categoriaSelecionada != '') {
 
      const objeto = {
        valor: valor,
        texto: texto,
        categoria: categoriaSelecionada,
        data: data,
        fixo: fixo

      }
      if(!transacaoSelecionada){

      Toast.show('Sucesso na criação!', 5);
     await create(objeto)
     reset()

    } else {
    
      Toast.show('Sucesso na edição!', 5);

await atualizar(objeto, transacaoSelecionada.id)
reset()

    }
    }
  }


  function preencher() {
  
    setTexto(transacaoSelecionada.texto)
    setValor(transacaoSelecionada.valor)
    setCategoriaSelecionada(transacaoSelecionada.categoria)

  }

  function reset(){
    setValor('')
    setTexto('')
    setCategoriaSelecionada('') 
  setFixo(false)
  setTransacao()
  setModalVisivel(false)

  }

  useEffect(() => {
    if(transacaoSelecionada) {
      preencher()

      setModalVisivel(true)
   
    }
  }, [transacaoSelecionada])





  return (
    <View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => { setModalVisivel(false) }}

      >
        <View style={styles.container}>
          <View style={styles.fundoCaixa}>
          <View style={{justifyContent:'center', top:'2%'}}>
            <Text style={styles.titulo}>Nova Movimentação</Text>
         
              <Pressable style={{right:'5%', position:'absolute', borderRadius:500}} onPress={() => {
             reset()
                
                
                
                }}><Entypo color={'red'} size={40} name='cross'/></Pressable>
            </View>

            <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

              <TextInput value={texto} style={styles.descricao} placeholder='Descrição' onChangeText={texto => setTexto(texto)} label='Descrição' />

              <TextInput value={`${valor}`} style={styles.valor} placeholder='Valor' onChangeText={valor => setValor(valor)} label='Valor' keyboardType="numeric" />

            </View>

            <View style={{ justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
              <View style={{ width:180, borderWidth:1, borderRadius:10, backgroundColor:'white', height:40, justifyContent:'center'}}>
        <RNPickerSelect 
                  onValueChange={(categoria) => setCategoriaSelecionada(categoria)}
          value={categoriaSelecionada}
                  placeholder={{ label: "Categoria", value:'null', color:'black' }}
             
                      items={[
                          { label: 'Entrada', value: 'Entrada', color:'#3C673B'},
                          { label: 'Saida', value: 'Saida', color:'#FF0000' },
                       
                      ]}
                    
                      />
                 
              </View>
           
            </View>
            <View style={{justifyContent:'center', alignItems:'center', marginTop:15}}>
          
          <Checkbox 
           disabled={false}
           value={fixo}
           onValueChange={(valor) => {setFixo(valor)}}
          />
              <Text style={{textAlign:'center', fontWeight:'700'}}>Fixo</Text>
          </View>
       
            <Pressable onPress={() => {
  save()
 reset()
}
}
>
<Text style={styles.botaoSalvar}><Entypo size={18} name='check' /> Salvar</Text>
</Pressable>

  

          </View>
        </View>
      </Modal>

      <Pressable style={{marginTop:187,   paddingVertical:10,
  marginBottom:12,
  marginHorizontal:20,
  borderRadius:20,
  backgroundColor:'gray'
  }} onPress={() => { setModalVisivel(true) }}><Entypo name='plus' size={50} color={'white'} style={{textAlign:'center'}} /></Pressable>

    </View>
  );
}

