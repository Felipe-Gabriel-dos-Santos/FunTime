import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: -50
	},
	input:{
		height: 50,
		width: 300,
		textAlign: 'center',
		marginBottom:8
	},

	button:{
		marginTop: 8
	},

	errorText: {
		textAlign: 'center',
		color: '#c40d00',
		fontSize: 10,
		marginHorizontal: 10,
		fontWeight: 'bold',
		marginBottom: 5
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
		padding: 25,
		paddingHorizontal: 62,
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
		color: 'purple',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: -10,
		fontSize: 15
	},
	modalSuccessTitle: {
		color: 'green',
		marginBottom: 10,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},

	modalErrorTitle: {
		color: 'red',
		marginBottom: 10,
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},

	modalText: {
		marginBottom: 15,
		fontSize: 15,
		textAlign: 'center'
	},

	modalErrorText: {
		marginBottom: 10,
		fontSize: 15,
		textAlign: 'center',
		color: '#c40d00'
	}
});