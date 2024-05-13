import express from "express";
import mongoose from "mongoose";
import Dummy from "./models/Dummy"

await mongoose.connect("mongodb://localhost:27017/");

const app = express()
const port = 3000

const names = ["Abhishek","Tom","Lucifer"]
const salaries = [100000,50000,75000]
const languages = ["Java","C","JavaScript"]
const cities = ["New York","Los Angeles","British Columbia"]
const boolManager = [true,false]

app.get('/', (req, res) => {
    const r1 = Math.floor(Math.random()*3)
    const r2 = Math.floor(Math.random()*2)
    const data = new Dummy({name:names[r1],salary:salaries[r1],language:languages[r1],city:cities[r1],isManager:boolManager[r2]});
    data.save()
    res.render()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})