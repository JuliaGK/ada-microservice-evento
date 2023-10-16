import express from "express";
import dotenv from "dotenv";
import eventsRouter from "./routes/eventsRoute";
import { createDbConnection } from "./db/dbConfig";
import participantsRouter from "./routes/participantsRoute";

dotenv.config();

createDbConnection();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/events", eventsRouter);

app.use("/participants", participantsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
