import React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import IniciarJogo from '../../components/IniciarJogo';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	return (
		<Background>

			<View style={styles.container}>
				
				<IniciarJogo name={'Adição'} text={'Jogo de soma: (Ex.: 2 + 2 = 4)'} routeName={'Jogo Adição'} navigation={navigation}/>
				<IniciarJogo name={'Acertar Nome do Animal'} text={'Acertar nome dos animais presentes nas imagens'} routeName={'Jogo Português'} navigation={navigation}/>
				
			</View>
	
		</Background>

	);
}