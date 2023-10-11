class Evento {
    nome: string;
    dataInicial: string;
    dataFinal: string;
    descricao: string;

    constructor(
        nome: string,
        descricao: string,
        dataInicial: string,
        dataFinal: string
    ) {
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
    }
}

export default Evento;
