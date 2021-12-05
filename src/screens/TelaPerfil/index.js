import React from 'react';

import UsuárioComLogin from './UsuárioComLogin';
import UsuárioSemLogin from './UsuárioSemLogin';

export default function TelaPerfil({navigation}){
    
	return (
		<UsuárioSemLogin navigation={navigation}/>
	);
}