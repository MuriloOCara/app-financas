
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import styles from './style'
import {useLayoutEffect} from 'react'
import Calculadora from './src/screens/Calculadora/index'
import Graficos from './src/screens/Graficos/index'
import Inserir from './src/screens/Inserir/index'
import TelaInicial from './src/screens/TelaInicial/index'
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import { createStackNavigator} from '@react-navigation/stack';
import Conta from './src/screens/Conta';
import Historico from './src/screens/Historico/index'
import Configuracoes from './src/screens/Configuracoes';

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {



  return (
    <NavigationContainer>



    <Tabs.Navigator >

 



          

    <Tabs.Screen 
    name="Tela Inicial" 
          component = { TelaInicial } 
          options={{ 
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ 'white' } size={ 25 } />
            ), 
            headerShown: false,  tabBarVisible: false, tabBarStyle: {backgroundColor:'#262626' },

          }}
          
          
          />

             <Tabs.Screen 
    name="Inserir" 
          component = { Inserir } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="plus" color={ 'white' } size={ 25 } />
            ),headerShown: false,  tabBarButton: () => null
          }}/>

<Tabs.Screen 
    name="Historico" 
          component = { Historico } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="cw" color={ 'white' } size={ 25 } />
            ),
           headerShown: false,tabBarStyle: {backgroundColor:'#262626' },
          }}/> 

              <Tabs.Screen 
    name="Gráficos" 
          component = { Graficos } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="line-graph" color={ 'white' } size={ 25 } />
            ),headerShown: false, tabBarStyle: {backgroundColor:'#262626' },
          }}/>

      
    


<Tabs.Screen 
    name="Configurações" 
          component = { Configuracoes } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="cog" color={ 'white' } size={ 25 } />
            ),headerShown: false, tabBarStyle: {backgroundColor:'#262626' },
          }}/>


    </Tabs.Navigator>
    
    
    </NavigationContainer>
  );
}


