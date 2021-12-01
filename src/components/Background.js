import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';

import Image from '../../assets/FunTimeBackground.png';

export default function Background(props){
    
	return (
		
		<SafeAreaView style={styles.view}>
			<ImageBackground source={Image} resizeMode='cover' imageStyle={styles.imageStyle} style={styles.imgBackground}>
				
				{props.children}
			
			</ImageBackground>
		</SafeAreaView>
	);

}

const styles = StyleSheet.create({
    
	imgBackground: {
		height: '100%',
		width: '100%',
	},

	imageStyle: {
		opacity: 0.5,
		height: '115%',
		width: '115%',
	}
});