import React from "react"
import { Text, StyleSheet, TouchableOpacity, FlatList, View } from "react-native"
import redes from "./redes.json"

export const TelaPrincipal = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === item.id)[0] })}
      style={styles.option}
    >
      <Text style={styles.textOption}>{item.service}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fiap Pass</Text>
      <FlatList data={redes} renderItem={renderItem} />
    </View>
  )
}

export default TelaPrincipal

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  option: {
    backgroundColor: "#ebeaea",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 12,
    marginVertical: 20,
  },
  textOption: {
    textAlign: "center",
    fontSize: 16,
  },
})
