const pgPromise = require('pg-promise');
const config = {
    host: 'containers-us-west-179.railway.app',
    port: '6346',
    database: 'railway',
    user: 'postgres',
    password: 'FUQbFuoDkhuwKM6PH05q'
};

const pgp = pgPromise({});
const db = pgp(config);

//db.any('select * from mascota').then(res => { console.log(res)});

exports.db = db;