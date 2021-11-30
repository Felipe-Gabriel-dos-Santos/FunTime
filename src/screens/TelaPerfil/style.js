import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	userImage: {
		width: 70,
		height: 70,
		borderRadius: 90,
		marginTop: 55,
		marginRight: '70%',
		marginLeft:' 5%',
		borderWidth: 2,
		borderColor: 'purple'
		
	},

	userView: {
		
		marginBottom: '90%',
		backgroundColor: '#fff',
		height: '25%',
		width: '93%',
		elevation: 15,
		borderRadius: 15,
		borderWidth: 2,
		borderColor: '#c8abdb'
	},

	userText: {
		color: 'black',
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontSize: 18,
		marginTop: -45,
		textTransform: 'uppercase',
		
		marginHorizontal: 30,
		marginLeft: 110
	},

	imgBackground: {
		height: '100%',
		width: '100%',
	},

	imageStyle: {
		opacity: 0.2,
		height: '100%',
		width: '100%'
		
	},

	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'purple',
		width: '100%',
		height: 50,
		marginTop: -140,
		elevation: 10,
		borderRadius: 10,

	},

	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 17
	},

	buttonName: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: '100%',
		height: 50,
		marginTop: -345,
		elevation: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#c8abdb'

	},

	buttonIdade: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: '100%',
		height: 50,
		marginTop: -285,
		elevation: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#c8abdb'

	},

	buttonEmail: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: '100%',
		height: 50,
		marginTop: -225,
		elevation: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#c8abdb'

	},

	buttonTextInfo: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 17
	}
});