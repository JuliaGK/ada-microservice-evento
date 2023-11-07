class Event {
    id: number;
    name: string;
    description: string;
    date: Date;
    duration: string;
    seats: number;

    constructor(
        id: number,
        name: string,
        description: string,
        date: Date,
        duration: string,
        seats: number
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.duration = duration;
        this.seats = seats;
    }
}

export default Event;
