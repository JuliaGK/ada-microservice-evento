import { Request, Response } from "express";
import Evento from "../models/Evento";
import { db } from "../db/dbConfig";
import axios from "axios";

const addEvent = (req: Request, res: Response) => {
    const newEvent: Evento = req.body;
    const sqlEvents = `INSERT INTO events (nome, descricao, dataInicial, dataFinal)
    VALUES ("${newEvent.nome}", "${newEvent.descricao}", "${newEvent.dataInicial}", "${newEvent.dataFinal}");`;

    db.run(sqlEvents, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("event added");
    });
};

export { addEvent };
