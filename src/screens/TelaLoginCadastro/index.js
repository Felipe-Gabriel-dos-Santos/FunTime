import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import Botão from '../../components/Botão';

export default function TelaLoginCadastro({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<StatusBar backgroundColor={styles.container.backgroundColor} />

				<View style={styles.TextStyle}>

					<Text>Bem vindo(a) ao</Text>
					<Text>FunTime</Text>

				</View>

			</View>

			<View style={styles.buttonContainer}>
				<Botão title="Cadastro" onPress={() => {navigation.navigate('Cadastro');}}/>
				<Botão title="Login" onPress={() => {navigation.navigate('Login');}}/>
				<Botão title="Tela Inícial" onPress={() => {navigation.navigate('Início / Tela Principal');}}/>
			</View>
		</SafeAreaView>
	);
}
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 20,
	},

	buttonContainer: {
		marginTop: 150,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},

	TextStyle: {
		marginTop: 300,
		fontSize: 20,
	}
});
