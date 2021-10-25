import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Background from '../../components/Background';
import Botão from '../../components/Botão';

import { styles } from './style';

export default function TelaCadastro() {

	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordTwo, setPasswordTwo] = useState(null);
	const [date, setDate] = useState(null);

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
						onChangeText={nome => setNome(nome)}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
					/>
				</Animatable.View>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
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
				</Animatable.View>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Senha"
						value={password}
						onChangeText={password => setPassword(password)}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						secureTextEntry
					/>
				</Animatable.View>
				<Animatable.View
					animation='zoomIn'
					useNativeDriver
					duration={1000}
				>
					<TextInput style={styles.input}
						label="Digite a Senha Novamente"
						value={passwordTwo}
						onChangeText={passwordTwo => setPasswordTwo(passwordTwo)}
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
						secureTextEntry
					/>
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
						mode='outlined'
						theme={{ colors: { primary: 'purple'}}}
					/>
				</Animatable.View>

				<View style={styles.button}>
					<Botão title='Cadastrar'onPress={()=>{}}/>
				</View>

			</View>
		</Background>
	);
  
}
