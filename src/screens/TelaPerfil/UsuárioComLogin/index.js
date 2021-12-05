import React, {useContext, useState} from 'react';
import { Image, Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../../components/Background';
import Botão from '../../../components/Botão';
import ModalFunTime from '../../../components/Modals/Modal-FunTime';

import { styles } from './style';

import LogOutAnimation from '../../../../assets/Animations/animation-log_out.json';
import defaultImage from '../../../../assets/default-user-image.png';
import BackGroundPerfilImage from '../../../../assets/FunTimeBackground2.png';

import Lottie from 'lottie-react-native';

import { UserContext } from '../../../context/UserContext';

export default function UsuárioComLogin() {

	const { User, setUser } = useContext(UserContext);
	
	const [Modal, setModal] = useState(false);

	return (

		<Background>
			<View style={styles.container}>
				<Animatable.View
					style={styles.userView}
					animation='slideInLeft'
					useNativeDriver
					duration={850}
				>
			
					<ImageBackground source={BackGroundPerfilImage} resizeMode='cover' imageStyle={styles.imageStyle} style={styles.imgBackground}>
						<Image
							style={styles.userImage}
							source={defaultImage}
						/>
				
						<Text numberOfLines={1} style={styles.userText}>{User.Nome}</Text>
					</ImageBackground>
				</Animatable.View>

				<Animatable.View
					animation='slideInRight'
					useNativeDriver
					duration={950}
					style={styles.buttonEmail}
				>
					<TouchableHighlight underlayColor='none'>
						<Text numberOfLines={1} style={styles.buttonTextInfo}>Email: {User.Email}</Text>
					</TouchableHighlight>
				</Animatable.View>

				<Animatable.View
					animation='slideInUp'
					useNativeDriver
					duration={2150}
					style={styles.button}
				>
					<TouchableHighlight
						underlayColor='none'
						onPress={
							() => {
								setModal(true);
								
							}
						}
					>
						<Text style={styles.buttonText}>Sair</Text>
					</TouchableHighlight>
				</Animatable.View>

				<ModalFunTime show={Modal} close={() => setModal(false)} buttonCloseText={'Não'}>

					<Lottie
						style={{width: 150, height: 150}}
						resizeMode='contain'
						source={LogOutAnimation}
						autoPlay
						autoSize
						loop={false}
					/>

					<Text style={styles.textModal}>
							Tem Certeza de Deseja Sair?
					</Text>
					<Botão title={'Sim'} onPress={()=> {
						setUser(
							{

								Id: null,
								Nome: '',
								Email: '',
								Senha: '',
								DataNascimento: '',
								Logado: false
						
							}
						);
						setModal(false);
					}}/>
				</ModalFunTime>

			</View>

		</Background>
	
	);
}
