import React from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';
import Botão from '../../../components/Botão';

import { styles } from './style';

import AstronautAnimation from '../../../../assets/Animations/animation-astronaut.json';

import Lottie from 'lottie-react-native';

export default function UsuárioSemLogin({navigation}){

	return (

		<Background>
			<View style={styles.container}>
				<Animatable.View
					animation='fadeIn'
					useNativeDriver
					duration={1000}
					style={styles.animation}
				>
					<Lottie
						style={{width: 325, height: 325}}
						resizeMode='contain'
						source={AstronautAnimation}
						autoPlay
						autoSize
						loop={true}
					/>
				</Animatable.View>

				<Animatable.Text
					animation='fadeIn'
					useNativeDriver
					duration={850}
					style={styles.text}
				>
					Parece que você não fez Login ou Cadastro.
				</Animatable.Text>

				<Botão
					title="Cadastro"
					onPress={() =>
						navigation.navigate('Cadastro')}
					style={styles.button}
					
				/>

				<Botão
					title="Login"
					onPress={() => navigation.navigate('Login')}
				/>
				
			</View>
		</Background>

	);
}