import db from '../DB';

db.transaction((tx) => {
	tx.executeSql(
		'CREATE TABLE Usuario(IDUsuario INT PRIMARY KEY AUTO_INCREMENT, Nome VARCHAR(50) NOT NULL, Email VARCHAR(50) NOT NULL, Senha VARCHAR(50) NOT NULL, Data_Nascimento VARCHAR(10) NOT NULL)'
	);
});

const Insert = (obj) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			//Comando SQL modificável
			tx.executeSql(
				'INSERT INTO Usuario (Nome, Email, Senha, Data_Nascimento) values (?, ?, ?, ?);',
				[obj.Nome, obj.Email, obj.Senha, obj.Data_Nascimento],
				//-----------------------
				(_, { rowsAffected, insertId }) => {
					if (rowsAffected > 0) resolve(insertId);
					else reject('Error inserting obj: ' + JSON.stringify(obj)); // Insert falhou
				},
				(_, error) => reject(error) // Erro interno em tx.executeSql
			);
		});
	});
};

const Update = (id, obj) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			//Comando SQL modificável
			tx.executeSql(
				'UPDATE Usuario SET Nome=?, Email=?, Senha=?, Data_Nascimento=? WHERE id=?;',
				[obj.Nome, obj.Email, obj.Senha, obj.Data_Nascimento, id],
				//-----------------------
				(_, { rowsAffected }) => {
					if (rowsAffected > 0) resolve(rowsAffected);
					else reject('Error updating obj: id=' + id); // Nenhum registro alterado
				},
				(_, error) => reject(error) // Erro interno em tx.executeSql
			);
		});
	});
};

const SelectById = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			//Comando SQL modificável
			tx.executeSql(
				'SELECT * FROM Usuario WHERE id=?;',
				[id],
				//-----------------------
				(_, { rows }) => {
					if (rows.length > 0) resolve(rows._array[0]);
					else reject('Obj not found: id=' + id); // Nenhum registro encontrado
				},
				(_, error) => reject(error) // Erro interno em tx.executeSql
			);
		});
	});
};

const DeleteById = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			//Comando SQL modificável
			tx.executeSql(
				'DELETE FROM Usuario WHERE id=?;',
				[id],
				//-----------------------
				(_, { rowsAffected }) => {
					resolve(rowsAffected);
				},
				(_, error) => reject(error) // Erro interno em tx.executeSql
			);
		});
	});
};

export default {
	Insert,
	Update,
	SelectById,
	DeleteById,
};