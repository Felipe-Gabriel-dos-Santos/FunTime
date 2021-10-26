import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';

export default function Background(props){

	const Image = '../../assets/FunTimeBackground.png';
    
	return (
		
		<SafeAreaView style={styles.view}>
			<ImageBackground source={require(Image)} resizeMode='cover' imageStyle={styles.imageStyle} style={styles.imgBackground}>
				
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