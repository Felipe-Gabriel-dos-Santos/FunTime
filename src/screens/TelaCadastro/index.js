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
import { validaEmail, verifica_se_duas_senhas_são_iguais, validaSenha, ValidaNome } from '../../services/Data Validation/email_validation';
import { CadastraNoBanco } from '../../services/SQLite/Tables/UsuáriosDB';

export default function TelaCadastro({ navigation }) {

	const [erroNome, setErroNome] = useState(false);
	const [erroEmail, setErroEmail] = useState(false);
	const [erroSenha1, setErroSenha1] = useState(false);
	const [erroSenha2, setErroSenha2] = useState(false);

	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [date, setDate] = useState('');

	const [ModalSucessoCadastro, setModalSucessoCadastro] = useState(false);

	const [ModalErroCadastro, setModalErroCadastro] = useState(false);

	const [ErrorText, setErrorText] = useState('');

	const {User, setUser} = useContext(UserContext);

	useEffect(() => {

		if(ModalSucessoCadastro == true) {
			setTimeout(() => {
				
				setModalSucessoCadastro(false);

				if(User.Id != null) navigation.navigate('Início / Tela Principal');
		
			}, 1700);
		}
		
	}
	, [ModalSucessoCadastro, User]);

	useEffect(() => {

		if(ModalErroCadastro == true) {
			setTimeout(() => {
				setModalErroCadastro(false);
			}, 2500);
		}
		
	}
	, [ModalErroCadastro]);

	function renderButton() {
		return (
			
			<View style={styles.button}>
				<Botão title='Cadastrar'onPress={()=>{

					CadastraNoBanco(nome, email, password, date)
						.then(Obj =>  {

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

		if (type == 'name' && ValidaNome(nome) == true) text = 'Nome invalido! o nome não pode conter números';
		else if(type == 'name') text = 'Nome invalido!';

		if(type == 'email') text = 'Email invalido!';

		if(type == 'password'
		&& verifica_se_duas_senhas_são_iguais(password, passwordTwo) == false
		&& password != ''
		&& passwordTwo != '') text = 'As senhas digitadas são diferentes!';

		else if(type == 'password') text = 'Senha invalida, a senha deve conter no mínimo 8 caracteres';
		
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
						label="Nome"
						value={nome}
						onChangeText={nome => {
							setNome(nome);
							if(nome == '' || ValidaNome(nome) == true) setErroNome(true);
							else setErroNome(false);
						}}
						autoCapitalize='sentences'
						autoCompleteType='name'
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						error={erroNome}
						maxLength={70}
					/>

					{erroNome ? renderErrorText('name') : <View/>}

				</Animatable.View>
				
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
						maxLength={50}
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
							if(validaSenha(password) == false) setErroSenha1(true);
							else setErroSenha1(false);
						}}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						error={erroSenha1}
						secureTextEntry
						maxLength={50}
					/>

					{erroSenha1 ? renderErrorText('password') : <View/>}

				</Animatable.View>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Digite a Senha Novamente"
						value={passwordTwo}
						onChangeText={passwordTwo => {
							setPasswordTwo(passwordTwo);
							if(validaSenha(passwordTwo) == false ||
							verifica_se_duas_senhas_são_iguais(password, passwordTwo) == false)
								setErroSenha2(true);

							else setErroSenha2(false);
						}}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						error={erroSenha2}
						secureTextEntry
						maxLength={50}
					/>

					{erroSenha2 ? renderErrorText('password') : <View/>}

				</Animatable.View>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Data de Nascimento"
						value={date}
						onChangeText={date => setDate(date)}
						autoCompleteType='cc-exp'
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						keyboardType='number-pad'
						placeholder='dd-mm-yyyy'
						maxLength={10}
					/>

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
										style={{width: 105, height: 105, justifyContent: 'center', alignContent: 'center', paddingLeft: '26.5%'}}
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

				</Animatable.View>

				<Animatable.Text
					style={styles.textNoAccount}
					animation={'fadeIn'}
					duration={1000}
					useNativeDriver
				>
					Já tem uma conta?

				</Animatable.Text>
				<Animatable.Text
					style={[styles.textNoAccount, {color: 'purple'}]}
					animation={'fadeIn'}
					duration={1000}
					useNativeDriver
					onPress={() => navigation.navigate('Login')}
				>
					Faça Login!

				</Animatable.Text>

				{
					password != ''
					&& erroNome == false
					&& erroEmail == false
					&& erroSenha1 == false
					&& erroSenha2 == false
					&& passwordTwo != ''
					&& nome != ''
					&& date != ''
					&& email != '' ? renderButton() : <View/>
				}

			</View>
		</Background>
	);
  
}
