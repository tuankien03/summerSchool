'use strict';
import {Schema, model}  from 'mongoose';

const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'Keys';

var keyTokenSchema = new Schema({
   user: {
         type: Schema.Types.ObjectId,
         ref: 'Account',
         required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    privateKey: {
        type: String,
        required: true
    },
    refreshToken: {
        type: Array,
        default: [],
    },
   }, {
        timestamps: true,
        collection: COLLECTION_NAME
   }
);

export default model(DOCUMENT_NAME, keyTokenSchema);