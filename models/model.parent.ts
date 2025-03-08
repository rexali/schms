import { Schema, Types } from "mongoose";
import { mongoose } from "../config/db";

interface Parent {
    firstName: string;
    lastName: string;
    email: String;
    phone: String; //parent's phone
    streetAddress: string;
    localGovt: string;
    state: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
}

const parentSchema = new Schema<Parent>({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    localGovt: { type: String },
    state: { type: String },
    country: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Parent || mongoose.model("Parent", parentSchema);