import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Modal, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function IniciarJogo(props){

	const [modalVisible, setModalVisible] = useState(false);

	const Image = '../../assets/FunTimeBackground.png';

	return (
		<View>
			<TouchableHighlight  underlayColor='none' onPress={() => setModalVisible(true)}>
				<LinearGradient colors={['#bf00bf', '#9733EE', '#9733EE', '#8303a3']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 1 }}
					style={styles.container}
				>
						
					<Text style={styles.text}>{props.name}</Text>
				</LinearGradient>
			</TouchableHighlight>

			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				statusBarTranslucent={true}
			>
				<View style={styles.centeredView}>
					<Animatable.View
						style={styles.modalView}
						animation='zoomInUp'
						useNativeDriver
						duration={450}
					>
						
						<Text style={styles.modalTitle}>{props.name}</Text>
						<Text style={styles.modalText}>{props.text}</Text>

						<TouchableHighlight
							underlayColor='none'
							onPress={() => {
								setModalVisible(false);
								props.navigation.navigate(props.routeName);
							}}
						>

							<LinearGradient colors={['#38ef7d', '#11998e']} style={styles.button}>
								<Text style={styles.text}>{'Jogar'}</Text>
							</LinearGradient>
						</TouchableHighlight>
			
						<TouchableHighlight
							underlayColor='none'
							style={[styles.buttonModal, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Fechar</Text>
						</TouchableHighlight>

					</Animatable.View>
				</View>
			</Modal>
			
		</View>
	);
}

const styles = StyleSheet.create({
      
	container: {
		backgroundColor: 'purple',
		paddingVertical: 45,
		paddingHorizontal: 110,
		borderRadius: 20,
		borderWidth: 4,
		borderColor: 'white',
		elevation: 5,
		marginHorizontal: 17,
		marginVertical: 5,

	},

	text: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20,
	},

	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		paddingHorizontal: 45,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		borderWidth: 2,
		borderColor: '#c0c2c0',
	},

	button: {

		marginTop: 35,
		paddingVertical: 15,
		paddingHorizontal: 62,
		borderRadius: 8,
		elevation: 5,
		borderWidth: 3,
		borderColor: '#fff'
	},

	buttonModal: {
		borderRadius: 20,
		padding: 20,
	},
	
	textStyle: {
		color: 'purple',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 17,
		marginBottom: -15
	},
	modalTitle: {
		marginBottom: 25,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#8303a3',
	},

	modalText: {
		marginBottom: 15,
		fontSize: 15,
		textAlign: 'center',
	},

	imgBackground: {
		
	},

});
