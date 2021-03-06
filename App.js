import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabBar from './src/components/TabBar';

import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaInicial from './src/screens/TelaInicial';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaPerfil from './src/screens/TelaPerfil';
import UsuárioComLogin from './src/screens/TelaPerfil/UsuárioComLogin';

import UserContextProvider from './src/context/UserContext';
import jogoAdição from './src/games/Operações Matemáticas/Adição';
import jogoPortuguês from './src/games/Português/AcertarAnimal-Imagem/index';

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
		<UserContextProvider>
	
			<NavigationContainer>
			
				<Stack.Navigator screenOptions={headerStyle}>
				
					<Stack.Screen name="Início / Tela Principal" component={TabBar} options={{headerShown: false}}/>
					<Stack.Screen name="Início" component={TelaInicial}/>
					<Stack.Screen name="Perfil" component={TelaPerfil}/>
					<Stack.Screen name="Perfil / Com Login" component={UsuárioComLogin}/>
					<Stack.Screen name="Cadastro" component={TelaCadastro}/>
					<Stack.Screen name="Login" component={TelaLogin}/>
			
					<Stack.Screen name="Jogo Adição" component={jogoAdição}/>
					<Stack.Screen name="Jogo Português" component={jogoPortuguês}/>
				
				</Stack.Navigator>
			</NavigationContainer>
	
		</UserContextProvider>
	);

}