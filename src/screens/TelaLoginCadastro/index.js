import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

import Botão from '../../components/Botão';

import { styles } from './style';

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
				{/* Temporario  */}
				<Botão title="Jogo Adição" onPress={() => {navigation.navigate('Adição');}}/>
			</View>
		</SafeAreaView>
	);
}
