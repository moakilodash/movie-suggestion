const postgres = require('postgres');

const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'moviedb',
    user: 'movieuser',
    password: 'moviepass'
});

module.exports = sql;
