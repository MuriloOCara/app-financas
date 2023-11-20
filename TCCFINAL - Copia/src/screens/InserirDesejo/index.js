import { Text, StyleSheet, View, Button, Pressable, Alert, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useState, useEffect, useCallback } from "react";
import styles from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native";
import { Modal } from "react-native";
import { Image } from "react-native";
import { create } from "../../services/Desejos";
import { Context } from "react";
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";
import { UserContexto } from "../../contexts/user";

export default function InserirDesejo() {
  const [modalVisivel, setModalVisivel] = useState(false);
  const [valor, setValor] = useState(0)
  const [nome, setNome] = useState('')
  const [importancia, setImportancia] = useState(0)
  const {usuario} = useContext(UserContexto)

  async function salvar() {
    const objeto = {
      valor: valor,
      nome: nome,
      importancia: importancia,
      id_user: usuario.id
    };

    if (objeto.valor && objeto.nome && objeto.importancia) {
   

      await create(objeto);
    } else {
      Alert.alert(
        "Erro na criação",
        "Preencha os campos corretamente"
      );
    }
  }

  function reset() {
    setNome("");
    setValor("");
    setModalVisivel(false);
    setImportancia(0)
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
            <View style={{ justifyContent: "center" }}>
        
            </View>

            <View
              style={{
                justifyContent: "center",
                gap: 10,
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View style={styles.inserirNome}>
                <TextInput
                  placeholder="Insira o nome"
                  style={{ textAlign: "center" }}
                  onChangeText={(item) => setNome(item)}
                />
              </View>
              <View style={styles.inserirNome}>
                <TextInput
                  placeholder="Insira o valor"
                  keyboardType="numeric"
                  style={{ textAlign: "center" }}
                  onChangeText={(item) => setValor(item)}
                />
              </View>
              <Text style={styles.importanciaTitulo}>Grau de importância</Text>
              <View style={styles.importanciaContainer}>
  {importancia ==1  ?  <TouchableOpacity onPress={() => {setImportancia(1)}}><Text style={[styles.importancia, {backgroundColor:'#6CE262'}]}>1</Text></TouchableOpacity> : <TouchableOpacity onPress={() => {setImportancia(1)}}><Text style={styles.importancia}>1</Text></TouchableOpacity>}
  {importancia ==2  ?     <TouchableOpacity onPress={() => {setImportancia(2)}}><Text style={[styles.importancia, {backgroundColor:'orange'}]}>2</Text></TouchableOpacity> :  <TouchableOpacity onPress={() => {setImportancia(2)}}><Text style={styles.importancia}>2</Text></TouchableOpacity>}
       {importancia ==3  ?    <TouchableOpacity onPress={() => {setImportancia(3)}}><Text style={[styles.importancia, {backgroundColor:'red'}]}>3</Text></TouchableOpacity> : <TouchableOpacity onPress={() => {setImportancia(3)}}><Text style={styles.importancia}>3</Text></TouchableOpacity>}
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
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
                  salvar();
                  reset();
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
        onPress={() => setModalVisivel(true)}
        style={styles.novoPerfilContainer}
      >
        <Text style={styles.novoPerfil}>
          {" "}
          <Entypo
            name="plus"
            size={25}
            color={"white"}
            style={{ textAlign: "center" }}
          />
        </Text>
      </Pressable>
    </View>
  );
}
