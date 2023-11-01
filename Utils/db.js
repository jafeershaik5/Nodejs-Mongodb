require('dotenv').config()
const dbConfig = require('../config/db.config');
const { MongoClient } = require('mongodb');

const client = new MongoClient(dbConfig.url)

let _db;
let connectPromise;

async function connectToDb() {
    if (!connectPromise) {
        connectPromise = new Promise(async (resolve, reject) => {
            try {
                await client.connect();
                console.log('Connected to the database 🌎', client.s.options.dbName);
                _db = client.db();
                resolve(_db);
            } catch (error) {
                console.error('Error connecting to the database:', error);
                reject(error);
            }
        });
    }
    return connectPromise;
}

function getDb() {
    if (!_db) {
        throw new Error('Database not connected');
    }
    return _db;
}

function isDbConnected() {
    return Boolean(_db);
}

module.exports = { connectToDb, getDb, isDbConnected };