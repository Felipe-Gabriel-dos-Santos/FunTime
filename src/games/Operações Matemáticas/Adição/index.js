import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

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

			<Animatable.View
				style={styles.buttonAlternatives}
				animation='bounceIn'
				useNativeDriver
				duration={2000}
			>

				<TouchableOpacity
					style={styles.button}
					onPress={() => VerificaResposta(ListaDeNumeros[0], resultado)}>

					<Text style={styles.buttonText}>{ListaDeNumeros[0]}</Text>

				</TouchableOpacity>
				
				<TouchableOpacity
					style={styles.button}
					onPress={() => VerificaResposta(ListaDeNumeros[1], resultado)}>

					<Text style={styles.buttonText}>{ListaDeNumeros[1]}</Text>

				</TouchableOpacity>
				
				<TouchableOpacity
					style={styles.button}
					onPress={() => VerificaResposta(ListaDeNumeros[2], resultado)}>

					<Text style={styles.buttonText}>{ListaDeNumeros[2]}</Text>

				</TouchableOpacity>
				
				<TouchableOpacity
					style={styles.button}
					onPress={() => VerificaResposta(ListaDeNumeros[3], resultado)}>

					<Text style={styles.buttonText}>{ListaDeNumeros[3]}</Text>

				</TouchableOpacity>
				
			</Animatable.View>
		</View>
	);
}