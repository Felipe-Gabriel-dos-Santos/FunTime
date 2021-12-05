import React, {useState} from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';
import Botão from '../../../components/Botão';
import ModalLoginCadastro from '../../../components/Modals/ModalLoginCadastro';

import { styles } from './style';

import AstronautAnimation from '../../../../assets/Animations/animation-astronaut.json';

import Lottie from 'lottie-react-native';

export default function UsuárioSemLogin({navigation}){

	const [Modal, setModal] = useState(false);

	return (

		<Background>
			<View style={styles.container}>

				<Lottie
					style={{width: 300, height: 300}}
					resizeMode='contain'
					source={AstronautAnimation}
					autoPlay
					autoSize
					loop={true}
				/>

				<Text>Parece que você não fez Login ou Cadastro.</Text>
				<Text>Deseja fazer Agora?</Text>
				<Botão title={'Sim'} onPress={() => setModal(true)}/>

				<ModalLoginCadastro show={Modal} close={() => setModal(false)} navigation={navigation}/>
				
			</View>
		</Background>

	);
}