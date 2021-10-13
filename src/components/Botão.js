import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Botão(props) {

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

	return (
		<View>
			<TouchableOpacity onPress={props.onPress}>
				<LinearGradient colors={['#bf00bf', '#8303a3']} style={styles.button}>
					<Text style={styles.text}>{String(props.title)}</Text>    
				</LinearGradient>
			</TouchableOpacity>
		</View>
	); }

      
