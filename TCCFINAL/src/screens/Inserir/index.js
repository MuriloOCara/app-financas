import { Text, View, Button, Modal, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { TextInput } from "react-native";
import { useEffect, useState } from "react";
import { create } from "../../services/Transacao";
import Entypo from "react-native-vector-icons/Entypo";
import Toast from "react-native-simple-toast";
import Checkbox from "expo-checkbox";
import { atualizar } from "../../services/Transacao";
import { useContext } from "react";
import { UserContexto } from "../../contexts/user";

import styles from "./style";

export default function Inserir({ transacaoSelecionada, setTransacao }) {
  const [texto, setTexto] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [valor, setValor] = useState("");
  const [fixo, setFixo] = useState(false);
  const [data, setData] = useState(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
  );
  const [modalVisivel, setModalVisivel] = useState(false);

  const {usuario} = useContext(UserContexto)

  async function save() {
    if (
      texto != null &&
      valor != null &&
      categoriaSelecionada != null &&
      texto != "" &&
      valor != "" &&
      categoriaSelecionada != ""
    ) {
      const objeto = {
        valor: valor,
        texto: texto,
        categoria: categoriaSelecionada,
        data: data,
        id_user: usuario.id
      };
      if (!transacaoSelecionada) {
        Toast.show("Sucesso na criação!", 5);
        console.log(objeto)
        reset();
        await create(objeto);
       
      } else {
        Toast.show("Sucesso na edição!", 5);

        await atualizar(objeto, transacaoSelecionada.id);
        reset();
      }
    }
  }

  function preencher() {
    setTexto(transacaoSelecionada.texto);
    setValor(transacaoSelecionada.valor);
    setCategoriaSelecionada(transacaoSelecionada.categoria);
    setFixo(Boolean(transacaoSelecionada.fixo));
  }

  function reset() {
    setValor("");
    setTexto("");
    setCategoriaSelecionada("");
    setTransacao();
    setModalVisivel(false);
  }

  useEffect(() => {
    if (transacaoSelecionada) {
      preencher();

      setModalVisivel(true);
    }
  }, [transacaoSelecionada]);

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
            <View style={{ justifyContent: "center", top: "2%" }}>
      

            </View>

            <View
              style={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextInput
                value={texto}
                style={styles.descricao}
                placeholder="Descrição"
                onChangeText={(texto) => setTexto(texto)}
                label="Descrição"
              />
   <View
              style={{

            
             
         
                justifyContent:'space-around'
              }}
            >
              <TextInput
                value={`${valor}`}
                style={styles.valor}
                placeholder="Valor"
                onChangeText={(valor) => setValor(valor)}
                label="Valor"
                keyboardType="numeric"
              />
              
              <View style={{alignItems:'center', marginLeft:15}}>
        
          
              </View>
            </View>
            </View>

            <View
              style={{
                justifyContent: "space-around",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 180,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: "white",
                  height: 40,
                  justifyContent: "center",
                  marginBottom:10
                }}
              >
                <RNPickerSelect
                  onValueChange={(categoria) =>
                    setCategoriaSelecionada(categoria)
                  }
                  value={categoriaSelecionada}
                  placeholder={{
                    label: "Categoria",
                    value: "null",
                    color: "black",
                  }}
                  items={[
                    { label: "Entrada", value: "Entrada", color: "#3C673B" },
                    { label: "Saida", value: "Saida", color: "#FF0000" },
                  ]}
                />
              </View>
            </View>
         
<View style={{flexDirection:'row', justifyContent:'space-around'}}>

<Pressable
              onPress={() => {
              reset()
            
              }}
            >
              <Text style={styles.botaoCancelar}>
                <Entypo size={18} name="cross" />
                Cancelar
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                save();
            
              }}
            >
              <Text style={styles.botaoSalvar}>
                <Entypo size={18} name="check" />
                Salvar
              </Text>
            </Pressable>
       
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={{
     
          paddingVertical: 10,
          marginBottom: 12,
     
          borderRadius: 20,
          backgroundColor: "gray",
          marginTop:'3%'
        }}
        onPress={() => {
          setModalVisivel(true);
        }}
      >
        <Entypo
          name="plus"
          size={50}
          color={"white"}
          style={{ textAlign: "center" }}
        />
      </Pressable>
    </View>
  );
}
