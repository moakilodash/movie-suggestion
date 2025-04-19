const sql = require('./db.js');

async function getMovieName(name) {
    const movie = await sql`
        SELECT 
            *
        FROM 
            movies
        WHERE 
            name = ${name}
    `;
    return movie[0];
}

async function insertMovie(name) {
    const movie = await sql`
        INSERT INTO movies
            (name)
        VALUES
            (${name})
        RETURNING *
    `;
    return movie[0];
}

let movie = null;

async function main() {
    try {
        movie = await getMovieName('The Matrix');
        if (!movie) {
            movie = await insertMovie('The Matrix');
        }
        console.log(movie);
    } catch (error) {
        console.error('Error:',error);
        process.exit(1);
    }
}

main();
