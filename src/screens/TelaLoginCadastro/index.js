import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import Botão from '../../components/Botão';

export default function TelaLoginCadastro({ navigation }) {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<StatusBar backgroundColor={styles.container.backgroundColor} />
				<Text>Bem vindo(a) ao</Text>
				<Text>FunTime</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Botão title="Cadastro" onPress={() => {navigation.navigate('Cadastro');}}/>
				<Botão title="Login" onPress={() => {navigation.navigate('Login');}}/>
				<Botão title="Tela Inícial" onPress={() => {navigation.navigate('Início');}}/>
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
		marginTop: 300,
	},

	buttonContainer: {
		marginTop: 220,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
  
	}
});
  