import React from 'react';
import { View } from 'react-native';

import IniciarJogo from '../../components/IniciarJogo';

import { styles } from './style';

export default function TelaPerfil(){
    
	return (
		<View style={styles.container}>
			<IniciarJogo/>
		</View>
	);
}