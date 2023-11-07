class Evento {
    id?: number;
    name: string;
    description: string;
    date: Date;
    duration: string;
    seats: number;

    constructor(
        name: string,
        description: string,
        date: Date,
        duration: string,
        seats: number
    ) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.duration = duration;
        this.seats = seats;
    }
}

export default Evento;
