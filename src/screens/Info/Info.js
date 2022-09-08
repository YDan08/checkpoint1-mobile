import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Info = ({ navigation, route }) => {
  const { rede } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Info</Text>
      <View style={styles.info}>
        <Text style={styles.service}>{rede.service}</Text>
        <Text style={styles.textInfo}>email: {rede.email}</Text>
        <Text style={styles.textInfo}>senha: {rede.password}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botaoVoltar}>
        <Text style={styles.textVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    backgroundColor: "#f75f78",
  },
  titulo: {
    backgroundColor: "#ffffffa8",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    padding: 8,
    borderRadius: 12,
    marginVertical: 20,
  },
  botaoVoltar: {
    width: "100%",
    padding: 8,
    borderRadius: 12,
    marginTop: 20,
    backgroundColor: "black",
  },
  textVoltar: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  info: {
    backgroundColor: "#ebeaea",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 20,
  },
  service: {
    textAlign: "center",
    fontSize: 20,
  },
  textInfo: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
  },
})
