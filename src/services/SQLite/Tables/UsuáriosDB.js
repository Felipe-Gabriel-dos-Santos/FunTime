import UsuárioClass from '../../../classes/Usuários';
import db from '../DB';

db.transaction((tx) => {
	
	tx.executeSql(
		'CREATE TABLE IF NOT EXISTS Usuarios (IDUsuario INTEGER PRIMARY KEY AUTOINCREMENT, Nome VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL, Senha VARCHAR(50) NOT NULL, Data_Nascimento VARCHAR(10) NOT NULL);'
	);
});

const CadastraNoBanco = (Nome, Email, Senha, Data_Nascimento) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
		
			tx.executeSql(
				'SELECT IDUsuario FROM Usuarios WHERE Email=?;',
				[Email],
				//-----------------------
				(_, { rows }) => {
					if (rows.length > 0) {

						reject('Parece que o Usuário já existe, tente fazer Login!');

					}
					tx.executeSql(
						'INSERT INTO Usuarios (Nome, Email, Senha, Data_Nascimento) values (?, ?, ?, ?);',

						[Nome, Email, Senha, Data_Nascimento],
						//-----------------------
						(_, { rowsAffected, insertId }) => {

							if (rowsAffected > 0) {
								tx.executeSql(
									'SELECT IDUsuario, Nome, Email, Senha, Data_Nascimento FROM Usuarios WHERE IDUsuario=?;',

									[insertId],
									(_, { rows }) => {
										if (rows.length > 0) resolve(rows.item(0));
									}
								);
							}
							else reject('Erro ao fazer Cadastro');
						},
						(_, error) => reject(error)
					);
				});
		});
	}
	);
};

const Login = (Email, Senha) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
		
			tx.executeSql(
				'SELECT IDUsuario, Nome, Email, Senha, Data_Nascimento FROM Usuarios WHERE Email=? AND Senha=?;',
				[Email, Senha],
				//-----------------------
				(_, { rows }) => {
					if (rows.length > 0) resolve(rows.item(0));
					else reject('Usuário não encontrado');
				},
				(_, error) => reject(error)
			);
		});
	});
};

export default {
	CadastraNoBanco,
	Login
};