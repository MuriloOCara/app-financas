import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flechas: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 5,
  },
  ano: {
    fontSize: 22,
    color: "white",
  },

  header: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderColor: "white",
 
  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop:15,
    borderTopWidth:0.3,
    borderColor:'white'
  },
});
export default styles;
