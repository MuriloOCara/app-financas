import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import kratos from "../../../assets/kratos.jpg";
import styles from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UserContexto } from "../../contexts/user";
import { excluirDesejo } from "../../services/Desejos";
import InfoCard from "../../components/InfoCard";

function DetalhesDesejo({ route, onDelete, onSelect }) {
  const navigator = useNavigation();

  const { nome, valor, concluido, importancia } = route.params.item;
  const { usuario } = useContext(UserContexto);
  const [balanco, setBalanco] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [media, setMedia] = useState(0);

  function calcularBalanco(obj) {
    var soma = 0;

    for (let i = 0; i < obj.length; i++) {
      if (obj[i].categoria == "Entrada") {
        soma = soma + obj[i].valor;
      } else {
        soma = soma - obj[i].valor;
      }
    }

    return soma;
  }

  function calcularTempo(obj, valorProduto, balanco) {
    var mediaGastos = 0;
    var mediaLucros = 0;

    const meses = obj.map((item) => item.data);
    const filtroMeses = meses.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    let total = 0;
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].categoria == "Entrada") {
        mediaLucros = mediaLucros + obj[i].valor;
      } else {
        mediaGastos = mediaGastos + obj[i].valor;
      }
    }

    total = Math.floor((mediaLucros - mediaGastos) / filtroMeses.length);
    setMedia(total);

    total = (valorProduto - balanco) / total;

    return Math.floor(total) + 1;
  }

  useEffect(() => {
    setBalanco(calcularBalanco(usuario.transacoes));
    setTempo(calcularTempo(usuario.transacoes, valor, balanco));
  }, [balanco]);

  return (
    <View style={styles.detalhesContainer}>
      <View style={styles.containerValores}>
        <InfoCard item={{ titulo: "Nome do produto", variavel: nome }} />

        <InfoCard item={{ titulo: "Balanço", variavel: balanco }} />
      </View>
      <View style={styles.containerValores}>
        <InfoCard item={{ titulo: "Preço do produto", variavel: valor }} />
        <InfoCard item={{ titulo: "Lucro por mês", variavel: media }} />
      </View>
      <View style={styles.containerValores}>
      <InfoCard item={{ titulo: "Importância", variavel: importancia }} />
</View>
      <Text style={styles.texto}>
        {balanco >= valor || tempo == 0
          ? "É possível adquirir este produto agora"
          : `Considerando a média de lucro por mês, vai ser possível adquirir isso em cerca de ${tempo} meses`}
      </Text>

      <Button
        title="Deletar Desejo"
        onPress={async () => {
          await excluirDesejo(route.params.item.id);
          navigator.goBack();
        }}
      />
    </View>
  );
}

export default DetalhesDesejo;
