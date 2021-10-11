import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLoginCadastro from './src/screens/TelaLoginCadastro';
import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaInicial from './src/screens/TelaInicial';


const Stack = createNativeStackNavigator();

export default function App() {


  const headerStyle = {

    headerMode: 'float',
    headerTitleAlign: 'center',
    headerTintColor: 'purple',
    transitionSpec: 'horizontal',
    animation: 'slide_from_right',
    presentation: 'card',
    gestureEnabled: true,
    headerBackTitle: false,

    headerTitleStyle: {
      fontWeight: 'bold',
      fonSize: 20,
      fontFamily: 'Roboto',
      color: 'purple'
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="Tela Login / Cadastro" component={TelaLoginCadastro} options={{headerShown: false}} />
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
        <Stack.Screen name="Login" component={TelaLogin}/>
        <Stack.Screen name="Início" component={TelaInicial}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 