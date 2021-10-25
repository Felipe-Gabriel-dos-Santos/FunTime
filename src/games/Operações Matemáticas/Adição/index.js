import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';

import { styles } from './style';

export default function jogoAdição() {

	var valorMinimo = 0;
	var valorMaximo = 10;

	const [numero1, setNumero1] = useState(getRandomInt(valorMinimo, valorMaximo));
	const [numero2, setNumero2] = useState(getRandomInt(valorMinimo, valorMaximo));

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min)) + min;
	}

	function VerificaResposta(arrayPosition, resultado){
		if (arrayPosition == resultado)
		{
			Alert.alert('Correto!');

			setNumero1(getRandomInt(valorMinimo, valorMaximo));
			setNumero2(getRandomInt(valorMinimo, valorMaximo));
		}

		else {
			Alert.alert('Errado!');
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
			</View>
		</Background>
	);
}