import React, {useState} from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import IniciarJogo from '../../components/IniciarJogo';
import ModalLoginCadastro from '../../components/Modals/ModalLoginCadastro';

import { styles } from './style';

export default function TelaInicial({ navigation }){

	const [modal, setModal] = useState(true);

	return (
		<Background>

			<View style={styles.container}>
				
				<IniciarJogo name={'Jogo Adição'} text={'Jogo de soma: (Ex.: 2 + 2 = 4)'} routeName={'Jogo Adição'} navigation={navigation}/>
				<IniciarJogo name={'Jogo Português'} text={'Acertar animal da Imagem'} routeName={'Jogo Português'} navigation={navigation}/>
				
			</View>

			<ModalLoginCadastro
				show={modal}
				close={() => setModal(false)}
				navigation={navigation}
			/>
	
		</Background>

	);
}