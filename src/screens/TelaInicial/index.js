import React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import IniciarJogo from '../../components/IniciarJogo';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	return (
		<Background>

			<View style={styles.container}>
				
				<IniciarJogo name={'Jogo Adição'} text={'Jogo de soma: (Ex.: 2 + 2 = 4)'} routeName={'Jogo Adição'} navigation={navigation}/>
				<IniciarJogo name={'Jogo Português'} text={'Acertar animal da Imagem'} routeName={'Jogo Português'} navigation={navigation}/>
				
			</View>
	
		</Background>

	);
}