import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
    id: String,
    title: String
})