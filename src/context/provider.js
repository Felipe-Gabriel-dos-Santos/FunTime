import React, { createContext, useState } from 'react';

export const ContextAPI = createContext({});

export default function ContextProvider( {children} ){

	const [User, setUser] = useState({

		Id: null,
		Nome: '',
		Email: '',
		Senha: '',
		DataNascimento: '',
		Logado: false
    
	});

	return(
		<ContextAPI.Provider value={{User, setUser}}>
			{children}
		</ContextAPI.Provider>
	);
}

export const useUser = () => React.useContext(ContextAPI);
