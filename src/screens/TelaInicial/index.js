import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';

import Background from '../../components/Background';
import Botão from '../../components/Botão';
import IniciarJogo from '../../components/IniciarJogo';
import ModalFunTime from '../../components/Modal-FunTime';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	const [modal, setModal] = useState(true);

	return (
		<Background>

			<View style={styles.container}>
				
				<IniciarJogo name={'Jogo Adição'} text={'Jogo de soma: (Ex.: 2 + 2 = 4)'} routeName={'Jogo Adição'} navigation={navigation}/>
				
			</View>
			
			<ModalFunTime
				show={modal}
				close={() => setModal(false)}
				buttonCloseText={'Agora não'}
			>

				<Image source={require('../../../assets/Logo-FunTime.png')} resizeMode='cover' style={styles.image}/>

				<Text style={styles.ModalText}>Deseja fazer login / Cadastro?</Text>

				<View style={styles.buttonContainer}>
				
					<Botão title="Cadastro" onPress={() => {
						setModal(false);
						navigation.navigate('Cadastro');
					
					}}
					style={styles.button}
					
					/>

					<Botão title="Login" onPress={() => {

						setModal(false);
						navigation.navigate('Login');
					}}
					/>

				</View>

			</ModalFunTime>
	
		</Background>

	);
}