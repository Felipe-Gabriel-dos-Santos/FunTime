import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Modal } from 'react-native';

export default function IniciarJogo(props){

	const [modalVisible, setModalVisible] = useState(false);
    
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
			marginTop: 22
		},
		modalView: {
			margin: 10,
			backgroundColor: 'white',
			height: 400,
			width: 300,
			borderRadius: 10,
			padding: 35,
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
		textStyle: {
			color: 'white',
			fontWeight: 'bold',
			textAlign: 'center'
		},
		modalText: {
			marginBottom: 15,
			textAlign: 'center',
			alignItems: 'center'
		}

	});

	return (
		<View>
			<TouchableHighlight  underlayColor='none' onPress={() => setModalVisible(!modalVisible)}>
				<LinearGradient colors={['#bf00bf', '#bf00bf', '#8303a3']}
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 1 }}
					style={styles.container}
				>
					<Text style={styles.text}>{props.name}</Text>
				</LinearGradient>
			</TouchableHighlight>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<TouchableHighlight  underlayColor='none' onPress={() => setModalVisible(!modalVisible)}>
							<Text>Fechar</Text>
						</TouchableHighlight>
						
					</View>
				</View>
			</Modal>
		</View>
	);
}
