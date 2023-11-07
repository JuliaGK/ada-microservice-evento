import { Request, Response } from "express";
import Event from "../models/Event";
import { initializeDatabase } from "../db/dbConfig";
import createError from "http-errors";

const dbPromise = initializeDatabase();

export const addEventHandler = async (event: Event) => {
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

export const getEventHandler = async (id: number) => {
    const db = await dbPromise;

    if (!id) {
        throw createError.BadRequest("Missing valid id");
    }

    const event = await db.get("SELECT * FROM events WHERE id = ?", id);

    if (event) {
        return event;
    } else {
        throw createError.NotFound();
    }
};

export const eventsController = {
    addEvent: async (req: Request, res: Response) => {
        try {
            const event: Event = req.body;
            await addEventHandler(event);
            res.status(201).send("event added");
        } catch (error) {
            res.status(404).send(error);
        }
    },

    getEvent: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const event = await getEventHandler(Number(id));
            res.json(event);
        } catch (error) {
            res.status(404).send(error);
        }
    },
};
