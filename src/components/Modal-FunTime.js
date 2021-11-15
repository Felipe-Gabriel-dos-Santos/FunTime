import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ModalFunTime = ({ show, close, title, text }) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={show}
			statusBarTranslucent={true}
			
		>
			<View style={styles.centeredView}>

				<Animatable.View
					style={styles.modalView}
					animation='zoomInUp'
					useNativeDriver
					duration={750}
				>

					<Text style={styles.modalTitle}>{title}</Text>
					<Text style={styles.modalText}>{text}</Text>

					<TouchableHighlight
						underlayColor='none'
						style={[styles.button, styles.buttonClose]}
						onPress={close}
					>
						<Text style={styles.textStyle}>Fechar</Text>
					</TouchableHighlight>
				</Animatable.View>

			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
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
		paddingHorizontal: 85,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 20,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		
	},
	textStyle: {
		color: 'purple',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: -15
	},
	modalTitle: {
		marginBottom: 25,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},

	modalText: {
		marginBottom: 15,
		fontSize: 15,
		textAlign: 'center'
	}
	
});

export default ModalFunTime;