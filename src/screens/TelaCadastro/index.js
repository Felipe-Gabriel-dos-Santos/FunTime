import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Background from '../../components/Background';
import Botão from '../../components/Botão';

import { validaEmail, verifica_se_duas_senhas_são_iguais, validaSenha, ValidaNome } from '../../services/Data Validation/email_validation';
import Usuários from '../../services/SQLite/Tables/Usuários';
import { styles } from './style';

export default function TelaCadastro() {

	const [erroNome, setErroNome] = useState(false);
	const [erroEmail, setErroEmail] = useState(false);
	const [erroSenha1, setErroSenha1] = useState(false);
	const [erroSenha2, setErroSenha2] = useState(false);

	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordTwo, setPasswordTwo] = useState('');
	const [date, setDate] = useState('');

	function generateObjectRegister(name, email, password, date){
		
		var DadosCadastro  = {
			Nome: name,
			Email: email,
			Senha: password,
			Data_Nascimento: date
		};

		return DadosCadastro;
	}

	function renderButton() {
		return (
			
			<View style={styles.button}>
				<Botão title='Cadastrar'onPress={()=>{

					var ObjCadastro = generateObjectRegister(nome, email, password, date);

					if (Usuários.Login(email, password) == false) Usuários.CadastraNoBanco(ObjCadastro);
					else console.log('O Usuário já existe');
				
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
					/>
				</Animatable.View>

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
