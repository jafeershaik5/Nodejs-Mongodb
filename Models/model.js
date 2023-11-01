const { ObjectId } = require('mongodb')
const db = require('../Utils/db')

class AppModel {
    constructor($collection) {
        this.collection = null;

        // Wrap the constructor in an async function
        (async () => {
            //checking if the database is connected or not if not connecting to DB first

            if (!db.isDbConnected()) {
                console.log('Waiting for the database to connect...');
                await db.connectToDb();
            }

            this.collection = db.getDb().collection($collection);
            console.log('Collection name:', $collection);
        })();

        // this.schema = $schema;
    }

    async find() {
        return await this.collection.find().toArray()
    }

    async findOne(condition = {}) {
        return await this.collection.findOne(condition)
    }

    async create(data) {
        try {
            console.log("creating a document with the data :", data)

            data.createdAt = new Date();
            data.updatedAt = new Date();
            let result = await this.collection.insertOne(data)
            return `${result.insertedId} Inserted successfully`;
        } catch (error) {
            console.error('Error in create method:', error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            const result = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...data, updatedAt: new Date() } });
            return `${result.modifiedCount > 0} Updated successfully!`;
        } catch (error) {
            console.error('Error in update method:', error);
            throw error;
        }
    }
}

module.exports = AppModel;