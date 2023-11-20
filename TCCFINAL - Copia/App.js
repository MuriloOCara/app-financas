import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaInicial from "./src/screens/TelaInicial/index";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Conta from "./src/screens/Conta";
import Historico from "./src/screens/Historico/index";
import PerfilProvider from "./src/contexts/user";
import ListaDesejos from "./src/screens/ListaDesejos/index";
import DetalhesDesejo from "./src/screens/DetalhesDesejo";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export function HomeTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Tela Inicial"
        component={TelaInicial}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={"white"} size={25} />
          ),
          headerStyle: {
            backgroundColor: "#21222C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarVisible: false,
          tabBarStyle: { backgroundColor: "#262626", borderTopWidth: 0 },
        }}
      />

      <Tabs.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="cw" color={"white"} size={25} />
          ),
          headerStyle: {
            backgroundColor: "#21222C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: { backgroundColor: "#262626", borderTopWidth: 0 },
        }}
      />  

      <Tabs.Screen
        name="Lista de Desejos"
        component={ListaDesejos}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document" color={"white"} size={25} />
          ),
          headerStyle: {
            backgroundColor: "#21222C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarStyle: { backgroundColor: "#262626", borderTopWidth: 0 },
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PerfilProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Conta"
            component={Conta}
            options={{ headerShown: false }}
          />
          
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              tabBarIcon: ({ color }) => (
                <Entypo name="line-graph" color={"white"} size={25} />
              ),
              headerShown: false,
              tabBarStyle: { backgroundColor: "#262626", borderTopWidth: 0 },
            }}
          />
            <Stack.Screen
            name="Detalhes Desejo"
            component={DetalhesDesejo}
            options={{
      
              headerStyle: {
                backgroundColor: "#21222C",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
         
            }}
          />
        </Stack.Navigator>
      </PerfilProvider>
    </NavigationContainer>
  );
}
