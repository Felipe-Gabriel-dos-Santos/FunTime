import React from 'react';
import { View, Modal } from 'react-native';

import Background from '../../components/Background';
import Botão from '../../components/Botão';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	return (
		<Background>
			<View style={styles.view}>
				<Botão title="Tela Login / Cadastro (Provisório)" onPress={() => {navigation.navigate('Tela Login / Cadastro');}}/>
			</View>
		</Background>
	);
}