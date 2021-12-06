import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Botão({onPress, title}) {

	return (
		<Animatable.View
			animation='fadeIn'
			useNativeDriver
			duration={2000}>

			<TouchableHighlight  underlayColor='none' onPress={onPress}>
				<LinearGradient colors={['#bf00bf', '#bf00bf', '#8303a3']} style={styles.button}>
					<Text style={styles.text}>{String(title)}</Text>
				</LinearGradient>
			</TouchableHighlight>

		</Animatable.View>
	); }

const styles = StyleSheet.create({
      
	button: {

		marginTop: 15,
		paddingVertical: 15,
		paddingHorizontal: 62,
		borderRadius: 8,
		elevation: 5,
	},

	text: {
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'center',
		fontSize: 15,
	}
});