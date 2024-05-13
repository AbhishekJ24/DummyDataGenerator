import mongoose from "mongoose";

const dummySchema = new mongoose.schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})

export const Dummy = mongoose.model("Dummy",dummySchema);