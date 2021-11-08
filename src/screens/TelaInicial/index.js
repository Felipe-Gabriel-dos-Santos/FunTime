import React from 'react';
import { View, Text } from 'react-native';

import Background from '../../components/Background';

import { styles } from './style';

export default function TelaInicial({ route }){

	return (
		<Background>
			<View style={styles.view}>
				<Text>{route.params.Id_do_Usuário}</Text>
			</View>
		</Background>
	);
}