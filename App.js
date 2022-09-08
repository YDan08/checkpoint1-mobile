import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView } from "react-native"
import Routes from "./src/routes"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Routes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
})
