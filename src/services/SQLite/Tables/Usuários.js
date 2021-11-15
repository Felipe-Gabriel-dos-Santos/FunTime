import db from '../DB';

db.transaction((tx) => {
	
	tx.executeSql(
		'CREATE TABLE IF NOT EXISTS Usuarios (IDUsuario INTEGER PRIMARY KEY AUTOINCREMENT, Nome VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL, Senha VARCHAR(50) NOT NULL, Data_Nascimento VARCHAR(10) NOT NULL);'
	);
});

function CadastraNoBanco(Obj) {

	db.transaction((tx) => {
		tx.executeSql(
			'SELECT IDUsuario FROM Usuarios WHERE Email=? AND Senha=?;',
			[Obj.Email, Obj.Senha],
			//-----------------------
			(_, { rows }) => {
				if (rows.length > 0) {

					console.log('O usuário ja existe!');

				}

				else {

					tx.executeSql(
						'INSERT INTO Usuarios (Nome, Email, Senha, Data_Nascimento) values (?, ?, ?, ?);',
						[Obj.Nome, Obj.Email, Obj.Senha, Obj.Data_Nascimento],
						(_, { rowsAffected, insertId }) => {

							if (rowsAffected > 0) console.log(insertId);

							else console.log('Error inserting obj: ' + JSON.stringify(Obj)); // Insert falhou
							
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