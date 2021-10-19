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
	}

});