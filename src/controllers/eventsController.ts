import { Request, Response } from "express";
import Evento from "../models/Event";
import { initializeDatabase } from "../db/dbConfig";

const dbPromise = initializeDatabase();

export const addEventHandler = async (event: Evento) => {
    const db = await dbPromise;
};

export const eventsController = {
    addEvent: async (req: Request, res: Response) => {
        const newEvent: Evento = req.body;
        const sql = `INSERT INTO events (nome, descricao, data, duracao, vagas)
        VALUES ("${newEvent.name}", "${newEvent.description}", "${newEvent.date}", "${newEvent.duration}", "${newEvent.seats}");`;

        const db = await dbPromise;

        db.run(sql, (error: Error) => {
            if (error) {
                res.status(400);
                res.end(error);
            }
            res.status(201);
            res.send("event added");
        });
    },

    getEvent: async (req: Request, res: Response) => {
        const id = req.params.id;
        const sql = `
            SELECT * FROM events WHERE id=${id};
        `;

        const db = await dbPromise;

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
    },
};
