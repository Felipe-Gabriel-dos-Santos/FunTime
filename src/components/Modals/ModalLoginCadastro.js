import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Logo from '../../../assets/Logo-FunTime.png';

import Botão from '../Botão';
import ModalFunTime from './Modal-FunTime';

export default function ModalLoginCadastro({navigation, show, close}){
	return(
		<ModalFunTime
			show={show}
			close={close}
			buttonCloseText={'Agora não'}
		>

			<Image source={Logo} resizeMode='cover' style={styles.image}/>

			<Text style={styles.ModalText}>Deseja fazer login / Cadastro?</Text>

			<View style={styles.buttonContainer}>
				
				<Botão title="Cadastro" onPress={() => {
					close;
					navigation.navigate('Cadastro');
					
				}}
				style={styles.button}
					
				/>

				<Botão title="Login" onPress={() => {

					close;
					navigation.navigate('Login');
				}}
				/>

			</View>

		</ModalFunTime>
	);
}

const styles = StyleSheet.create({

	image: {
		height: 80,
		width: 110,
		marginBottom: 20
	},

	ModalText: {
		paddingTop: 10,
		paddingBottom: 3,
		color: 'purple',
		fontWeight: '500',
		textAlign: 'center',
		marginBottom: -15,
		fontSize: 15
	},

	buttonContainer: {

		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		fontSize: 100
	},
});