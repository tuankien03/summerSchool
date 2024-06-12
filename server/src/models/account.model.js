import {Schema, model} from 'mongoose';

const DOCUMENT_NAME = 'Account';
const COLLECTION_NAME = 'Accounts';

const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, avatarUrl: {
        type: String,
        default: '/images/default-avatar.png'
    }
}, {
        collection: COLLECTION_NAME,
        timestamps: true
    }
);

export default model(DOCUMENT_NAME, accountSchema);