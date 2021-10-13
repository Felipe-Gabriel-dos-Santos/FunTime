import React from 'react';

import { Entypo, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaInicial from './src/screens/TelaInicial';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaLoginCadastro from './src/screens/TelaLoginCadastro';
import TelaPerfil from './src/screens/TelaPerfil';

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
	};

	function Tab() {
      
		const Tab = createBottomTabNavigator();
    
		return (
			<Tab.Navigator>
				<Tab.Screen name="Home" component={TelaInicial} options={{
					tabBarIcon: ({size, color}) => (<Entypo name="home" size={size} color={color} />)
				}}/>
				<Tab.Screen name="Perfil" component={TelaPerfil} options={{
					tabBarIcon: ({size, color}) => (<Octicons name="person" size={size} color={color} />)
				}}/>    
			</Tab.Navigator>
		);}

	return (
    
		<NavigationContainer>
			<Stack.Navigator screenOptions={headerStyle}>
				<Stack.Screen name="Tela Login / Cadastro" component={TelaLoginCadastro} options={{headerShown: false}}/>
				<Stack.Screen name="Início" component={Tab} options={{headerShown: false}}/>
				<Stack.Screen name="Cadastro" component={TelaCadastro}/>
				<Stack.Screen name="Login" component={TelaLogin}/>
			</Stack.Navigator>
		</NavigationContainer>  
	);

} 