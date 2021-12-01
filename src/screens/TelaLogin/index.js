import React, { useState, useEffect, useContext } from 'react';
import { View, Modal, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Background from '../../components/Background';
import Botão from '../../components/Botão';

import { styles } from './style';

import ErrorAnimation from '../../../assets/Animations/animation-error.json';
import SuccessAnimation from '../../../assets/Animations/animation-success.json';

import Lottie from 'lottie-react-native';

import { UserContext } from '../../context/UserContext';
import { validaEmail, validaSenha } from '../../services/Data Validation/email_validation';
import UsuáriosDB from '../../services/SQLite/Tables/UsuáriosDB';

export default function TelaLogin({ navigation }) {

	const [erroEmail, setErroEmail] = useState(false);
	const [erroSenha, setErroSenha] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [ModalSucessoCadastro, setModalSucessoCadastro] = useState(false);

	const [ModalErroCadastro, setModalErroCadastro] = useState(false);

	const [ErrorText, setErrorText] = useState('');

	const {User, setUser} = useContext(UserContext);

	useEffect(() => {

		if(ModalSucessoCadastro == true) {
			setTimeout(() => {
				setModalSucessoCadastro(false);
				if(User.Id != null) {
					console.log(User);
					navigation.navigate('Início / Tela Principal');
				}
			}, 1700);
		}
		
	}
	, [ModalSucessoCadastro, User]);

	useEffect(() => {

		if(ModalErroCadastro == true) {
			setTimeout(() => {
				setModalErroCadastro(false);
			}, 2000);
		}
		
	}
	, [ModalErroCadastro]);

	function renderButton() {
		return (
			
			<View style={styles.button}>
				<Botão title='Login'onPress={()=>{
						
					UsuáriosDB.Login( email, password )
						.then( Obj =>  {

							if (Obj.IDUsuario) {
								setUser({
									Id: Obj.IDUsuario,
									Nome: Obj.Nome,
									Email: Obj.Email,
									Senha: Obj.Senha,
									DataNascimento: Obj.Data_Nascimento,
									Logado: true
								});
								setModalSucessoCadastro(true);
							}
						
						})
						.catch( err => {
							setErrorText(String(err));
							setModalErroCadastro(true);
						} );
					
				}}/>
				
			</View>
		);
	}

	function renderErrorText(type) {
		
		var text = '';

		if(type == 'email') text = 'Email invalido, verifique se o email foi digitado corretamente';

		if(type == 'password') text = 'Senha invalida, verifique se a senha foi digitada corretamente';
		
		return (
			<Animatable.Text
				style={styles.errorText}
				animation='shake'
				useNativeDriver
				duration={1000}
			>
				{text}
			</Animatable.Text>
		);
	}

	return (
		<Background>
			<View style={styles.view}>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Email"
						value={email}
						onChangeText={email => {
							setEmail(email);
							if(validaEmail(email) == false) setErroEmail(true);
							else setErroEmail(false);
						}}
						mode='outlined'
						autoCapitalize="none"
						autoCompleteType="email"
						textContentType="emailAddress"
						keyboardType="email-address"
						theme={{ colors: { primary: 'purple'}}}
						error={erroEmail}
					/>

					{erroEmail ? renderErrorText('email') : <View/>}

				</Animatable.View>

				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Senha"
						value={password}
						onChangeText={password => {
							setPassword(password);
							if(validaSenha(password) == false) setErroSenha(true);
							else setErroSenha(false);
						}}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						error={erroSenha}
						secureTextEntry
					/>

					{erroSenha ? renderErrorText('password') : <View/>}

				</Animatable.View>

				<Modal
					animationType="fade"
					transparent={true}
					visible={ModalSucessoCadastro}
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

								<Text style={styles.modalSuccessTitle}>Sucesso!</Text>

							</Animatable.View>
								
						</Animatable.View>

					</View>
				</Modal>

				<Modal
					animationType="fade"
					transparent={true}
					visible={ModalErroCadastro}
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
									style={{width: 115, height: 115,  paddingLeft: '11%'}}
									resizeMode='contain'
									source={ErrorAnimation}
									autoPlay
									autoSize
									loop={false}
								/>

								<Text style={styles.modalErrorTitle}>Erro!</Text>
								<Text style={styles.modalErrorText}>{ErrorText}</Text>

							</Animatable.View>
								
						</Animatable.View>

					</View>
				</Modal>
			
				{
					email != ''
					&& password != ''
					&& erroEmail == false
					&& erroSenha == false ? renderButton() : <View/>
				}

			</View>
		</Background>
	);
  
}