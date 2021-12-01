import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	questionStyle: {
		marginHorizontal: 20,
		textAlign: 'center',
		fontSize: 65,
		fontWeight: 'bold',
		marginTop: -450,
		color: 'purple'
	},

	questionText: {
		marginHorizontal: 20,
		textAlign: 'center',
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#8a8a8a'
	},

	buttonAlternatives: {
		marginBottom: -450,
		flexDirection: 'row',
		alignContent: 'flex-end',
		marginHorizontal: 20,
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	button: {
		height: 70,
		width: 170,
		marginBottom: 20,
		backgroundColor: '#8303a3',
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#bf00bf',
		elevation: 3
	},

	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 15,
		fontSize: 25,
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

});