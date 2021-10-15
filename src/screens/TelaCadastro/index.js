import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import Botão from '../../components/Botão';

export default function TelaCadastro() {

	const [nome, setNome] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordTwo, setPasswordTwo] = useState(null);
	const [date, setDate] = useState(null);

	const styles = StyleSheet.create({
        
		container: {
			flex: 1,
			backgroundColor: '#fff',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: -50
		},
   
		inputView: {
			backgroundColor: '#e0dede',
			textAlign: 'center',
			borderRadius: 8,
			width: 300,
			borderWidth: 0,
			height: 45,
			marginBottom: 20,
			alignItems: 'center',
			elevation: 5,
		},
   
		TextInput: {
			textAlign: 'center',
			height: 50,
			flex: 1,
			padding: 10,
      
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Nome"
					autoCapitalize='words'
					placeholderTextColor="#003f5c"
					onChangeText={(nome) => setNome(nome)}/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}/>
			</View>
    
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Senha"
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Digite a Senha Novamente"
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(passwordTwo) => setPasswordTwo(passwordTwo)}/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Data de Nascimento"
					placeholderTextColor="#003f5c"
					onChangeText={(date) => setDate(date)}/>
			</View>

			<View>
				<Botão title="Cadastrar" onPress={()=>{}}/>
			</View>

		</View>
    
	);
  
}
