import { Request, Response } from "express";
import { db } from "../db/dbConfig";
import axios from "axios";

const addParticipant = async (req: Request, res: Response) => {
    type Participant = {
        userId: string;
        eventId: string;
    };
    const participant: Participant = req.body;

    if (await validateParticipant(participant.userId)) {
        console.log("Existe");
    }
    console.log("nao existe");
};

async function validateParticipant(userId: string) {
    try {
        await axios.get(`http://localhost:3001/users/${userId}`);
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}

export default addParticipant;
