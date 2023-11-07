CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    description VARCHAR(50),
    data VARCHAR(50),
    duration VARCHAR(50),
    seats INTEGER
);