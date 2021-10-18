import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Botão from '../../components/Botão';

export default function TelaLogin() {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const styles = StyleSheet.create({
		view: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: -50
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
			
			<View style={styles.button}>
				<Botão title='Login'onPress={()=>{}}/>
			</View>

		</View>
	);
  
}