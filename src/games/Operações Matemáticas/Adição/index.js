import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';

import { styles } from './style';

import ErrorAnimation from '../../../../assets/Animations/animation-error.json';
import SuccessAnimation from '../../../../assets/Animations/animation-success.json';

import Lottie from 'lottie-react-native';

export default function jogoAdição() {

	var valorMinimo = 0;
	var valorMaximo = 10;

	const [numero1, setNumero1] = useState(getRandomInt(valorMinimo, valorMaximo));
	const [numero2, setNumero2] = useState(getRandomInt(valorMinimo, valorMaximo));

	const [ModalAcerto, setModalAcerto] = useState(false);

	const [ModalErro, setModalErro] = useState(false);

	useEffect(() => {

		if(ModalAcerto == true) {
			setTimeout(() => {
				setModalAcerto(false);
			}, 1700);
		}
		
	}
	, [ModalAcerto]);

	useEffect(() => {

		if(ModalErro == true) {
			setTimeout(() => {
				setModalErro(false);
			}, 1700);
		}
		
	}
	, [ModalErro]);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min)) + min;
	}

	function VerificaResposta(arrayPosition, resultado){
		if (arrayPosition == resultado)
		{
			setModalAcerto(true);

			setNumero1(getRandomInt(valorMinimo, valorMaximo));
			setNumero2(getRandomInt(valorMinimo, valorMaximo));
		}

		else {
			setModalErro(true);
		}
	}

	var resultado = (numero1 + numero2);

	var ListaDeNumeros = [];
    
	ListaDeNumeros.push(
		resultado,
		(getRandomInt(valorMinimo, valorMaximo)),
		(getRandomInt(valorMinimo, valorMaximo)),
		(getRandomInt(valorMinimo, valorMaximo)),
	);

	ListaDeNumeros = ListaDeNumeros.sort(() => Math.random() - 0.5);
  
	return (

		<Background>
			<View style={styles.container}>
				<View>
					<Animatable.Text
						style={styles.questionStyle}
						animation='bounceInDown'
						useNativeDriver
						duration={2000}
					>
						{numero1}  {'+'}  {numero2} = {'?'}

					</Animatable.Text>
				</View>

				<Animatable.Text
					style={styles.questionText}
					animation='bounceInUp'
					useNativeDriver
					duration={2400}
				>
				A soma de {numero1} + {numero2} é igual a:
				</Animatable.Text>

				<Animatable.View
					style={styles.buttonAlternatives}
					animation='bounceInUp'
					useNativeDriver
					duration={2000}
				>

					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaDeNumeros[0], resultado)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaDeNumeros[0]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaDeNumeros[1], resultado)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaDeNumeros[1]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaDeNumeros[2], resultado)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaDeNumeros[2]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaDeNumeros[3], resultado)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaDeNumeros[3]}

						</Animatable.Text>

					</TouchableOpacity>
				
				</Animatable.View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={ModalAcerto}
					statusBarTranslucent={true}
				>
					<View style={styles.centeredView}>

						<Animatable.View
							style={styles.modalView}
							animation='zoomInUp'
							useNativeDriver
							duration={750}
						>

							<Animatable.View
								animation='zoomInUp'
								useNativeDriver
								duration={70}
							>
								<Lottie
									style={{width: 100, height: 100}}
									resizeMode='contain'
									source={SuccessAnimation}
									autoPlay
									autoSize
									loop={false}
								/>

								<Text style={styles.modalSuccessTitle}>Acerto!</Text>

							</Animatable.View>
								
						</Animatable.View>

					</View>
				</Modal>

				<Modal
					animationType="fade"
					transparent={true}
					visible={ModalErro}
					statusBarTranslucent={true}
				>
					<View style={styles.centeredView}>

						<Animatable.View
							style={styles.modalView}
							animation='zoomInUp'
							useNativeDriver
							duration={750}
						>

							<Animatable.View
								animation='zoomInUp'
								useNativeDriver
								duration={70}
							>
								<Lottie
									style={{width: 115, height: 115}}
									resizeMode='contain'
									source={ErrorAnimation}
									autoPlay
									autoSize
									loop={false}
								/>

								<Text style={styles.modalErrorTitle}>Errado!</Text>
								<Text style={styles.modalErrorText}>Tente Novamente!</Text>

							</Animatable.View>
								
						</Animatable.View>

					</View>
				</Modal>
			</View>
		</Background>
	);
}