import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Botão(props) {

	return (
		<Animatable.View
			animation='bounceIn'
			useNativeDriver
			duration={2000}>

			<TouchableHighlight  underlayColor='none' onPress={props.onPress}>
				<LinearGradient colors={['#bf00bf', '#bf00bf', '#8303a3']} style={styles.button}>
					<Text style={styles.text}>{String(props.title)}</Text>
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
		fontSize: 14,
	}
});