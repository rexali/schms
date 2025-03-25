import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import { DataStore } from 'notarealdb';

const store = new DataStore('./config/data');
const assignments = store.collection('assignments');
const lessons = store.collection('lessons');
const notes = store.collection('notes');
const students = store.collection('students');
const submissions = store.collection('submissions');

/**
 * Connect to MongoDB: MongoDb Connection
 */

if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {

    /**
     * Connect to MongoDB: Local MongoDb Connection
     */

    mongoose.connect("mongodb://localhost:27017/schmsdb", {}).then(() => {
        console.log("Local connection to Mongodb successful");
    }).catch(err => {
        console.warn(err);
    });
} else {

    /**
     * Connect to MongoDB: Cloud MongoDb Connection
     */

    const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.xdhuq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000
    }).then(() => {
        console.log("Cloud connection to Mongodb successful");
    }).catch((error: any) => {
        console.log(error.message)
    });
}

export {
    mongoose,
    store,
    assignments,
    lessons,
    students,
    submissions,
    notes
};