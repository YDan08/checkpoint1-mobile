import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Info from "../screens/Info/Info"
import TelaPrincipal from "../screens/TelaPrincipal/TelaPrincipal"
const { Screen, Navigator } = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='TelaPrincipal' component={TelaPrincipal} />
        <Screen name='Info' component={Info} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
