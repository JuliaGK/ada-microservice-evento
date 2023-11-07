import { Request, Response } from "express";
import Evento from "../models/Event";
import { initializeDatabase } from "../db/dbConfig";
import createError from "http-errors";

const dbPromise = initializeDatabase();

export const addEventHandler = async (event: Evento) => {
    const db = await dbPromise;

    if (
        !event.name ||
        !event.description ||
        !event.date ||
        !event.duration ||
        !event.seats
    ) {
        throw createError.BadRequest("Missing required properties");
    }

    try {
        const result = await db.run(
            `INSERT INTO events (name, description, date, duration, seats) VALUES (?, ?, ?, ?, ?)`,
            [
                event.name,
                event.description,
                event.date,
                event.duration,
                event.seats,
            ]
        );
        return result;
    } catch (error) {
        console.error("Error in addEvent: ", error);
        throw createError.InternalServerError();
    }
};

export const eventsController = {
    addEvent: async (req: Request, res: Response) => {
        const event: Evento = req.body;
        await addEventHandler(event);
        res.status(201).send("event added");
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
