import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Background from '../../components/Background';
import Botão from '../../components/Botão';

import { validaEmail, validaSenha } from '../../services/Data Validation/email_validation';
import Usuários from '../../services/SQLite/Tables/UsuáriosDB';
import { styles } from './style';

export default function TelaLogin({ navigation }) {

	const [erroEmail, setErroEmail] = useState(false);
	const [erroSenha, setErroSenha] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function renderButton() {
		return (
			
			<View style={styles.button}>
				<Botão title='Login'onPress={()=>{

					if (Usuários.Login(email, password) != false){
						
						const Id = Usuários.Login(email, password);

						console.log(Id);
						navigation.navigate('Início / Tela Principal', {Id_do_Usuário: Id});
					}
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