import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider( {children} ){

	const [User, setUser] = useState({

		Id: null,
		Nome: '',
		Email: '',
		Senha: '',
		DataNascimento: '',
		Logado: false
    
	});

	return(
		<UserContext.Provider value={{
			User,
			setUser
		}}>

			{children}
			
		</UserContext.Provider>
	);
}

export function useUser(){
	const UserContext = useContext(UserContext);
	const {User, setUser} = UserContext;

	return { User, setUser };
}