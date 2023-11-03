const { ObjectId } = require('mongodb');
const db = require('../Utils/db');

class AppModel {
    constructor($collection) {
        this.collection = null;

        (async () => {
            //checking if the database is connected or not if not connecting to DB first

            if (!db.isDbConnected()) {
                console.log('Waiting for the database to connect...');
                await db.connectToDb();
            }

            this.collection = db.getDb().collection($collection);
            console.log('Collection name:', $collection);
        })();

    }

    async find() {
        return await this.collection.find().toArray();
    }

    async findOne(condition = {}) {
        const result = await this.collection.findOne(condition);
        if (result) {
            return result;
        } else {
            return `No document Found!`
        };
    }

    async create(data) {
        try {
            console.log("creating a document with the data :", data)

            //Adding time stamps to the data.
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
            let condition = await this.collection.findOne({ _id: new ObjectId(id) })
            if (condition) {
                const result = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...data, updatedAt: new Date() } });
                return `${result.modifiedCount > 0} Updated successfully!`;
            } else {
                return `No document found with ${id}`
            }

        } catch (error) {
            console.error('Error in update method:', error);
            throw error;
        }
    }
    async deleteOne(id) {
        try {
            const condition = await this.collection.findOne({ _id: new ObjectId(id) })
            if (condition) {
                const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
                return `${result.deletedCount > 0} Deleted  successfully!`;
            } else {
                return `No document found with ${id}`
            }

        } catch (error) {
            console.error('Error in deleteOne Method:', error);
            throw error;
        }
    }

    //you can add some more methods here!
}

module.exports = AppModel;