export function validaEmail(email) {
		
	var regex = /\S+@\S+\.\S+/;

	return regex.test(email);
}

export function verifica_se_duas_senhas_são_iguais(Senha1, Senha2) {
		
	if (Senha1 == Senha2) return true;
	else return false;
}

export function validaSenha(senha) {
		
	if (senha.length >= 8) return true;
	else  return false;
}

export function ValidaNome(Nome){
	var regex = /[0-9]/g;

	return regex.test(Nome);
}
