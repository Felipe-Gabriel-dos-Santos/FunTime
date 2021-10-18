import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-paper';

import Botão from '../../components/Botão';

import { styles } from './style';

export default function TelaLogin() {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

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