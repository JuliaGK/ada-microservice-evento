class Evento {
    id?: number;
    nome: string;
    descricao: string;
    data: Date;
    duracao: string;
    vagas: number;

    constructor(
        nome: string,
        descricao: string,
        data: Date,
        duracao: string,
        vagas: number
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.duracao = duracao;
        this.vagas = vagas;
    }
}

export default Evento;
