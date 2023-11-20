import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import kratos from "../../../assets/kratos.jpg";
import styleFunction from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

function Desejo({ item, onSelect }) {


  var configObject;
  if ((item.importancia == 1)) {
    configObject = {
      backgroundColor: "#6CE262",

    };
  } else if ((item.importancia == 2)) {
    configObject = {
      backgroundColor: "orange",
 
    };
  } else  {
    configObject = {
      backgroundColor: "red",
    }
  }
  const styles = styleFunction(configObject);

  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.desejoContainer}>
        <Text style={styles.descricao}>{item.nome}</Text>
        <Text style={styles.preco}>R$ {item.valor}</Text>

      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Desejo);
