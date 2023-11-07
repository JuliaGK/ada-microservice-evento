import { beforeEach, expect, test, describe } from "vitest";
import { initializeDatabase } from "../db/dbConfig";
import { faker } from "@faker-js/faker";
import Event from "../models/Event";
import { NotFound, BadRequest } from "http-errors";
import { addEventHandler, getEventHandler } from "./eventsController";

const makeEvent = async (event: Event) => {
    const db = await initializeDatabase();
    const id = event.id ?? faker.number.int();

    await db.run(
        `INSERT INTO events (id, name, description, date, duration, seats) VALUES (?, ?, ?, ?, ?, ?)`,
        [
            event.id,
            event.name,
            event.description,
            event.date,
            event.duration,
            event.seats,
        ]
    );
};

beforeEach(async () => {
    const dbPromise = initializeDatabase();
    const db = await dbPromise;

    await db.run("DELETE FROM events");
});

describe("tests for getEvent()", () => {
    test("test if i can get an event", async () => {
        const name = faker.lorem.words(3);

        const eventToCreate: Event = {
            id: faker.number.int(),
            name,
            description: faker.lorem.paragraph(),
            date: faker.date.future(),
            duration: faker.lorem.word(1),
            seats: faker.number.int(),
        };

        await makeEvent(eventToCreate);

        const event = await getEventHandler(eventToCreate.id);

        expect(event).toEqual(expect.objectContaining({ name }));
    });

    test("test if it throws an error when getting an invalid event", async () => {
        const id = -1;

        await expect(getEventHandler(id)).rejects.toBeInstanceOf(NotFound);
    });
});

describe("tests for addEvent", async () => {
    test("test if it throws a bad request error when adding and event with invalid name", async () => {
        const invalidEventToAdd: Event = {
            id: faker.number.int(),
            name: "",
            description: faker.lorem.paragraph(),
            date: faker.date.future(),
            duration: faker.lorem.word(1),
            seats: faker.number.int(),
        };

        await expect(addEventHandler(invalidEventToAdd)).rejects.toBeInstanceOf(
            BadRequest
        );
    });

    test("test if i can add a event", async () => {
        const eventToAdd: Event = {
            id: faker.number.int(),
            name: faker.lorem.words(3),
            description: faker.lorem.paragraph(),
            date: faker.date.future(),
            duration: faker.lorem.word(1),
            seats: faker.number.int(),
        };

        const result = await addEventHandler(eventToAdd);

        expect(result).toBeTruthy;
    });
});
