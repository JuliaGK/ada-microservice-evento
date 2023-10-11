import express from "express";
import dotenv from "dotenv";
import eventsRouter from "../routes/eventsRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/events", eventsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
