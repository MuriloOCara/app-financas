
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
import PerfilProvider from './src/contexts/user'

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

export function HomeTabs(){
return(
  
  <Tabs.Navigator >

 


        

  <Tabs.Screen 
  name="Tela Inicial" 
        component = { TelaInicial } 
        options={{ 
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={ 'white' } size={ 25 } />
          ), 
          headerShown: false,  tabBarVisible: false, tabBarStyle: {backgroundColor:'#262626', borderTopWidth:0 },

        }}
        
        
        />

  

<Tabs.Screen 
  name="Historico" 
        component = { Historico } 
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="cw" color={ 'white' } size={ 25 } />
          ),
         headerShown: false,tabBarStyle: {backgroundColor:'#262626', borderTopWidth:0 },
        }}/> 

            <Tabs.Screen 
  name="Gráficos" 
        component = { Graficos } 
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="line-graph" color={ 'white' } size={ 25 } />
          ),headerShown: false, tabBarStyle: {backgroundColor:'#262626', borderTopWidth:0 },
        }}/>



    
  





  </Tabs.Navigator>
)
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
       <Stack.Screen name="Home" component={HomeTabs}     options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="line-graph" color={ 'white' } size={ 25 } />
          ),headerShown: false, tabBarStyle: {backgroundColor:'#262626', borderTopWidth:0 },
        }}/>
     
      </Stack.Navigator>
      </PerfilProvider>

    
    
    </NavigationContainer>
  );
}


