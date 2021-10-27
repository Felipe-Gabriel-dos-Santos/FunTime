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
	}
});