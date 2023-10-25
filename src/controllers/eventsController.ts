import { Request, Response } from "express";
import Evento from "../models/Evento";
import { db } from "../db/dbConfig";

const addEvent = (req: Request, res: Response) => {
    const newEvent: Evento = req.body;
    const sql = `INSERT INTO events (nome, descricao, data, duracao, vagas)
    VALUES ("${newEvent.nome}", "${newEvent.descricao}", "${newEvent.data}", "${newEvent.duracao}", "${newEvent.vagas}");`;

    db.run(sql, (error: Error) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        res.status(201);
        res.send("event added");
    });
};

const getEvent = (req: Request, res: Response) => {
    const id = req.params.id;
    const sql = `
        SELECT * FROM events WHERE id=${id};
    `;
    db.get(sql, [], (error: Error, row: any) => {
        if (error) {
            res.status(400);
            res.end(error);
        }
        console.log(row);
        if (row) {
            res.send(row);
        } else {
            res.status(404);
            res.send("Event not found");
        }
    });
};

export { addEvent, getEvent };
