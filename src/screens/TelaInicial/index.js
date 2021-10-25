import React from 'react';
import { View, Text } from 'react-native';

import Background from '../../components/Background';

import { styles } from './style';

export default function TelaInicial(){

	return (
		<Background>
			<View style={styles.view}>
				<Text>Teste</Text>
			</View>
		</Background>
	);
}