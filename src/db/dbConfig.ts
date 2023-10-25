const sqlite3 = require("sqlite3").verbose();
const filePath = "./src/db/events.db";

let db: any = null;

const createDbConnection = () => {
    db = new sqlite3.Database(filePath, (error: any) => {
        if (error) {
            return console.error(error.message);
        }
    });
    console.log("Connection with SQLite has been estabilished");
    createTableEvents();
    return db;
};

const createTableEvents = () => {
    db.exec(`CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(50),
        descricao VARCHAR(50),
        data VARCHAR(50),
        duracao VARCHAR(50),
        vagas INTEGER
    );
    `);
};

export { createDbConnection, db };
