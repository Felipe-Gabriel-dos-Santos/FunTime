import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function TelaInicial(){

	const style = StyleSheet.create({

		view: {
			flex: 1,
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	return (
		<View style={style.view}>
			
		</View>
	);
}