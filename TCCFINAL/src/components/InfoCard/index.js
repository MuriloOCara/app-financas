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
import styles from "./style";
import React from "react";
import kratos from "../../../assets/kratos.jpg";

import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

function InfoCard({item, onSelect}) {


  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
  <Text style={styles.titulo}>{item.titulo}</Text>
  <Text style={styles.variavel}>{item.variavel}</Text>

      </View>
    </TouchableOpacity>
  );
}

export default React.memo(InfoCard);
