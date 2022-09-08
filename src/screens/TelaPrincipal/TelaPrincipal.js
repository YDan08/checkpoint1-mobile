import React, { useEffect, useState } from "react"
import { Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import redes from "./redes.json"

export const TelaPrincipal = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Fiap Pass</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 1)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 2)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 3)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Youtube</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 4)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Stack Overflow</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 5)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Info", { rede: redes.filter(rede => rede.id === 6)[0] })}
        style={styles.option}
      >
        <Text style={styles.textOption}>Outlook</Text>
      </TouchableOpacity>
    </ScrollView>
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
    width: "100%",
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
