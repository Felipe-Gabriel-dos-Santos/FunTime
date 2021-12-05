import React, {useContext} from 'react';
import { View } from 'react-native-animatable';

import { UserContext } from '../../context/UserContext';
import UsuárioComLogin from './UsuárioComLogin';
import UsuárioSemLogin from './UsuárioSemLogin';

export default function TelaPerfil({navigation}){

	const {User} = useContext(UserContext);
		
	function renderComponent(){
		if (User.Logado) return <UsuárioComLogin/>;
		
		else return <UsuárioSemLogin navigation={navigation}/>;
	}
    
	return (
		<View>
			{renderComponent()}
		</View>
	);
}