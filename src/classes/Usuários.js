class Usuários {
	constructor( Id, Imagem, Nome, Email, Senha, Data_Nascimento, Status){
		this.Id = Id,
		this.Imagem = Imagem,
		this.Nome = Nome,
		this.Email = Email,
		this.Senha = Senha,
		this.Data_Nascimento = Data_Nascimento,
		this.Status = Status;
	}

	setStatus(Status){
		if (Status == 'Logado') this.Status = Status;
	}

	Nome_Completo(){
		return this.Nome.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
	}
    
	Primeiro_Nome(){
		String(this.Nome);
		var Nome_Completo = this.Nome.split(' ');
		var Primeiro_Nome = Nome_Completo[0].charAt(0).toUpperCase() + Nome_Completo[0].slice(1);

		return Primeiro_Nome;
	}

	Email(){
		return this.Email;
	}

	Idade(ano_aniversario, mes_aniversario, dia_aniversario) {
		var d = new Date,
			ano_atual = d.getFullYear(),
			mes_atual = d.getMonth() + 1,
			dia_atual = d.getDate(),
    
			ano_aniversario = +ano_aniversario,
			mes_aniversario = +mes_aniversario,
			dia_aniversario = +dia_aniversario,
    
			quantos_anos = ano_atual - ano_aniversario;
    
		if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
			quantos_anos--;
		}
    
		return quantos_anos < 0 ? 0 : quantos_anos;
	}

}

const Usuário = new Usuários(null, '../../assets/default-user-image.png', '', '', '', '', 'Sem Login');

export default Usuário;