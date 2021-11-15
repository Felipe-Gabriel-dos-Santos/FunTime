import React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import Botão from '../../components/Botão';
import IniciarJogo from '../../components/IniciarJogo';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	return (
		<Background>
			<View style={styles.container}>
				<IniciarJogo name={'Jogo Adição'} text={'Jogo de soma: (Ex.: 2 + 2 = 4)'} routeName={'Adição'} navigation={navigation}/>
			</View>
			
			<View style={styles.view}>
				<Botão title="Tela Login / Cadastro (Provisório)" onPress={() => {navigation.navigate('Tela Login / Cadastro');}}/>
			</View>
		</Background>
	);
}