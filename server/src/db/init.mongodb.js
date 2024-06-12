import mongoose from 'mongoose';
import config from '../../config/config.mongodb.js';
import {countConnect} from '../helpers/checkconnect.js';

const connectUri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;




class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if(1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        mongoose.connect(connectUri).then(() => {
            console.log('Connected to MongoDB sucessfully',countConnect()

        );
        }).catch((error) => {
            console.log('Error connecting to MongoDB', error);
        })
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

export default instanceMongodb;
