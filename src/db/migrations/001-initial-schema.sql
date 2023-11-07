CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(50),
    data VARCHAR(50),
    duracao VARCHAR(50),
    vagas INTEGER
);