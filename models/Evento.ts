class Evento {
    nome: string;
    dataInicial: string;
    dataFinal: string;
    descricao: string;

    constructor(
        nome: string,
        dataInicial: string,
        dataFinal: string,
        descricao: string
    ) {
        this.nome = nome;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.descricao = descricao;
    }
}
