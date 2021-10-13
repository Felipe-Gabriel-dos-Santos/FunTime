import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabBar from './src/components/TabBar';

import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaLoginCadastro from './src/screens/TelaLoginCadastro';

const Stack = createNativeStackNavigator();

export default function App() {

	// Estilo do cabeçalho da pagina
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
			color: 'purple'
		},
	};

	return (
    
		<NavigationContainer>
			<Stack.Navigator screenOptions={headerStyle}>
				<Stack.Screen name="Tela Login / Cadastro" component={TelaLoginCadastro} options={{headerShown: false}}/>
				<Stack.Screen name="Início / Tela Principal" component={TabBar} options={{headerShown: false}}/>
				<Stack.Screen name="Cadastro" component={TelaCadastro}/>
				<Stack.Screen name="Login" component={TelaLogin}/>
			</Stack.Navigator>
		</NavigationContainer>
	);

}