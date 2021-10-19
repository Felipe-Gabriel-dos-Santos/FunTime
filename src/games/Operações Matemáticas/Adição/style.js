import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	questionStyle: {
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
		backgroundColor: 'purple',
		borderRadius: 10,
		borderWidth: 2,
		borderColor: 'white'
	},

	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		paddingTop: 15,
		fontSize: 25
	}

});