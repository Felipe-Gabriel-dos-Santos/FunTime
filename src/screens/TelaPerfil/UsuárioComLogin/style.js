import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignItems: 'center'
	},

	userImage: {
		width: 70,
		height: 70,
		justifyContent: 'center',
		borderRadius: 90,
		marginTop: '12%',
		marginBottom: 15,
		marginHorizontal: '40%',
		borderWidth: 2,
		borderColor: 'purple'
		
	},

	userView: {
		marginTop: 15,
		marginBottom: 15,
		height: 190,
		width: '93%',
		elevation: 15,
		borderRadius: 15,
		borderWidth: 2,
		borderColor: '#c8abdb',
		backgroundColor: '#fff',
	},

	userText: {
		color: 'black',
		fontWeight: 'bold',
		fontStyle: 'normal',
		fontSize: 18,
		marginHorizontal: '25%',
		textTransform: 'uppercase',
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
		width: '90%',
		height: 40,
		backgroundColor: 'purple',
		borderRadius: 10,
		
	},

	buttonText: {
		color: 'white',
		paddingVertical: 6,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 17
	},

	buttonEmail: {

		alignItems: 'center',
		backgroundColor: '#fff',
		width: '90%',
		height: 40,
		paddingVertical: 6,
		paddingHorizontal: 8,
		elevation: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#c8abdb',
		marginBottom: 10,

	},

	buttonTextInfo: {
		color: 'black',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 17
	},

	textModal: {
		fontWeight: 'bold',
		marginBottom: 15,
		fontSize: 15,
	}
});