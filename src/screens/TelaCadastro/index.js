import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import Botão from '../../components/Botão';

export default function TelaCadastro() {

	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordTwo, setPasswordTwo] = useState(null);
	const [date, setDate] = useState(null);

	const styles = StyleSheet.create({
		view: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: -50,
		},
		input:{
			height: 50,
			width: 300,
			textAlign: 'center',
			marginBottom:8
		},

		button:{
			marginTop: 8
		}
	});

	return (
		<View style={styles.view}>

			<TextInput style={styles.input}
				label="Nome"
				value={nome}
				onChangeText={nome => setNome(nome)}
				mode='outlined'
				theme={{ colors: { primary: 'purple'}}}
			/>

			<TextInput style={styles.input}
				label="Email"
				value={email}
				onChangeText={email => setEmail(email)}
				mode='outlined'
				autoCapitalize="none"
				autoCompleteType="email"
				textContentType="emailAddress"
				keyboardType="email-address"
				theme={{ colors: { primary: 'purple'}}}
			/>

			<TextInput style={styles.input}
				label="Senha"
				value={password}
				onChangeText={password => setPassword(password)}
				mode='outlined'
				theme={{ colors: { primary: 'purple'}}}
				secureTextEntry
			/>

			<TextInput style={styles.input}
				label="Digite a Senha Novamente"
				value={passwordTwo}
				onChangeText={passwordTwo => setPasswordTwo(passwordTwo)}
				mode='outlined'
				theme={{ colors: { primary: 'purple'}}}
				secureTextEntry
			/>

			<TextInput style={styles.input}
				label="Data de Nascimento"
				value={date}
				onChangeText={date => setDate(date)}
				mode='outlined'
				theme={{ colors: { primary: 'purple'}}}
			/>

			<View style={styles.button}>
				<Botão title='Cadastrar'onPress={()=>{}}/>
			</View>

		</View>
	);
  
}
