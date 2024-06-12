import { Schema, model } from "mongoose";

const DOCUMENT_NAME = 'Student';
const COLLECTION_NAME = 'Students';

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    levelKnowledge: {
        type: String,
        enum: ['basic', 'intermediate', 'advanced'],
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

export default model(DOCUMENT_NAME, studentSchema);