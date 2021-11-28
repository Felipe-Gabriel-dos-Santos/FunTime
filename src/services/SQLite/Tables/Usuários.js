import UsuárioClass from '../../../classes/Usuários';
import db from '../DB';

db.transaction((tx) => {
	
	tx.executeSql(
		'CREATE TABLE IF NOT EXISTS Usuarios (IDUsuario INTEGER PRIMARY KEY AUTOINCREMENT, Nome VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL, Senha VARCHAR(50) NOT NULL, Data_Nascimento VARCHAR(10) NOT NULL);'
	);
});

function CadastraNoBanco(Usuário) {

	db.transaction((tx) => {
		tx.executeSql(
			'SELECT IDUsuario FROM Usuarios WHERE Email=?;',
			[Usuário.Email],
			//-----------------------
			(_, { rows }) => {
				if (rows.length > 0) {

					console.log('O usuário ja existe!');

				}

				else {

					tx.executeSql(
						'INSERT INTO Usuarios (Nome, Email, Senha, Data_Nascimento) values (?, ?, ?, ?);',

						[Usuário.Nome, Usuário.Email, Usuário.Senha, Usuário.Data_Nascimento],

						(_, { rowsAffected, insertId }) => {

							if (rowsAffected > 0) {
								UsuárioClass.Id = parseInt(insertId);
							}

							else console.log('Error inserting obj: ' + JSON.stringify(Usuário)); // Insert falhou
							
						});
				
				}
			}
		);
	}
	);
}

function SelectUsuárioById(id){
	db.transaction((tx) => {
		tx.executeSql(
			'SELECT * FROM Usuarios WHERE IDUsuario=?;',
			[id],
			//-----------------------
			(_, { rows }) => {
				if (rows.length > 0) console.log(rows._array[0]);
				else console.log('Obj not found: id=' + id);
			}
		);
	});
}

export default {
	CadastraNoBanco,
	SelectUsuárioById,
};