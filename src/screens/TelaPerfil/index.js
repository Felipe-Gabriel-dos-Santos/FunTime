import React from 'react';
import { Image, Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../../components/Background';

import { styles } from './style';

import defaultImage from '../../../assets/default-user-image.png';
import BackGroundPerfilImage from '../../../assets/FunTimeBackground2.png';
import Usuário from '../../classes/Usuários';

export default function TelaPerfil(){
    
	return (
		<View style={styles.container}>
			<Background>

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
				
						<Text numberOfLines={1} style={styles.userText}>Felipe Gabriel dos Santos testetexttext</Text>
					</ImageBackground>
				</Animatable.View>

				<Animatable.View
					animation='slideInRight'
					useNativeDriver
					duration={950}
				>
					<TouchableHighlight underlayColor='none' style={styles.buttonName}>
						<Text style={styles.buttonTextInfo}>Nome: Felipe Gabriel dos Santos</Text>
					</TouchableHighlight>
				</Animatable.View>

				<Animatable.View
					animation='slideInLeft'
					useNativeDriver
					duration={1050}
				>
					<TouchableHighlight underlayColor='none' style={styles.buttonIdade}>
						<Text style={styles.buttonTextInfo}>Idade: 17</Text>
					</TouchableHighlight>
				</Animatable.View>

				<Animatable.View
					animation='slideInRight'
					useNativeDriver
					duration={1150}
				>
					<TouchableHighlight underlayColor='none' style={styles.buttonEmail}>
						<Text style={styles.buttonTextInfo}>Email: vdoss2011@gmail.com</Text>
					</TouchableHighlight>
				</Animatable.View>

				<Animatable.View
					animation='slideInUp'
					useNativeDriver
					duration={2150}
				>
					<TouchableHighlight underlayColor='none' style={styles.button}>
						<Text style={styles.buttonText}>Sair</Text>
					</TouchableHighlight>
				</Animatable.View>

			</Background>
		</View>
	);
}