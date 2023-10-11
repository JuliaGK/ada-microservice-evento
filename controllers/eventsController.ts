import { Request, Response } from "express";
import Evento from "../models/Evento";
import { db } from "../db/dbConfig";

const addEvent = (req: Request, res: Response) => {
    const newEvent: Evento = req.body;
    const sql = `INSERT INTO events (nome, descricao, dataInicial, dataFinal)
    VALUES ("${newEvent.nome}", "${newEvent.descricao}", "${newEvent.dataInicial}", "${newEvent.dataFinal}");`;
    db.run(sql);

    res.send("event added");
};

export { addEvent };
