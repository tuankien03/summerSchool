import { Schema, model } from "mongoose";

const DOCUMENT_NAME = 'Article';
const COLLECTION_NAME = 'Articles';

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    slug: { type: String, unique: true },
    content: { type: String, default: '' },
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

export default model(DOCUMENT_NAME, articleSchema);