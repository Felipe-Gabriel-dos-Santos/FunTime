import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';

import { styles } from './styles';

import ErrorAnimation from '../../../../assets/Animations/animation-error.json';
import SuccessAnimation from '../../../../assets/Animations/animation-success.json';

import Lottie from 'lottie-react-native';

import Cachorro from './Imagens/cachorro.png';
import Coelho from './Imagens/coelho.png';
import Crocodilo from './Imagens/crocodilo.png';
import Gato from './Imagens/gato.png';
import Girafa from './Imagens/girafa.png';
import Hipopótamo from './Imagens/hipopotamo.png';
import Leão from './Imagens/leão.png';
import Papagaio from './Imagens/papagaio.png';
import Pinguim from './Imagens/pinguim.png';
import Porco from './Imagens/porco.png';
import Rato from './Imagens/rato.png';
import Sapo from './Imagens/sapo.png';
import Urso from './Imagens/urso.png';
import Vaca from './Imagens/vaca.png';

export default function jogoPortuguês(){

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

	var ListaAnimais = [
		{
			Nome: 'Cachorro',
			Imagem: Cachorro
		},
		{
			Nome: 'Coelho',
			Imagem: Coelho
		},
		{
			Nome: 'Crocodilo',
			Imagem: Crocodilo
		},
		{
			Nome: 'Gato',
			Imagem: Gato
		},
		{
			Nome: 'Girafa',
			Imagem: Girafa
		},
		{
			Nome: 'Hipopótamo',
			Imagem: Hipopótamo
		},
		{
			Nome: 'Leão',
			Imagem: Leão
		},
		{
			Nome: 'Papagaio',
			Imagem: Papagaio
		},
		{
			Nome: 'Pinguim',
			Imagem: Pinguim
		},
		{
			Nome: 'Porco',
			Imagem: Porco
		},
		{
			Nome: 'Rato',
			Imagem: Rato
		},
		{
			Nome: 'Sapo',
			Imagem: Sapo
		},
		{
			Nome: 'Urso',
			Imagem: Urso
		},
		{
			Nome: 'Vaca',
			Imagem: Vaca
		}
	];

	var valorMínimo = 0;
	var valorMáximo = ListaAnimais.length;

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);

		return Math.floor(Math.random() * (max - min)) + min;
	}

	const [Número, setNúmero] = useState(getRandomInt(valorMínimo, valorMáximo));
	
	var Imagem = ListaAnimais[Número].Imagem;

	var respostaCerta = ListaAnimais[Número].Nome;

	var ListaAlternativas = [];
	
	ListaAlternativas.push(
		respostaCerta,
		(ListaAnimais[getRandomInt(valorMínimo, valorMáximo)].Nome),
		(ListaAnimais[getRandomInt(valorMínimo, valorMáximo)].Nome),
		(ListaAnimais[getRandomInt(valorMínimo, valorMáximo)].Nome),
	);
		
	ListaAlternativas = ListaAlternativas.sort(() => Math.random() - 0.5);
		
	function VerificaResposta(arrayPosition, respostaCerta){
		if (arrayPosition == respostaCerta)
		{
			setModalAcerto(true);
			setNúmero(getRandomInt(valorMínimo, valorMáximo));
		}

		else {
			setModalErro(true);
		}
	}

	return (
		<Background>
			<View style={styles.container}>
				<View>

					<Animatable.Image
						animation='bounceInDown'
						useNativeDriver
						duration={2000}
						style={styles.Image}
						source={Imagem}
						resizeMode='contain'
					/>

				</View>
				<Animatable.Text
					style={styles.questionText}
					animation='bounceInUp'
					useNativeDriver
					duration={2400}
				>
				Qual o nome deste animal?
				</Animatable.Text>
				<Animatable.View
					style={styles.buttonAlternatives}
					animation='bounceInUp'
					useNativeDriver
					duration={2000}
				>

					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaAlternativas[0], respostaCerta)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaAlternativas[0]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaAlternativas[1], respostaCerta)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaAlternativas[1]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaAlternativas[2], respostaCerta)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaAlternativas[2]}

						</Animatable.Text>

					</TouchableOpacity>
				
					<TouchableOpacity
						style={styles.button}
						onPress={() => VerificaResposta(ListaAlternativas[3], respostaCerta)}>

						<Animatable.Text
							style={styles.buttonText}
							animation='bounceIn'
							useNativeDriver
							duration={2000}
						>
							{ListaAlternativas[3]}

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