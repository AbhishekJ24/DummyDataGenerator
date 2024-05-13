import express from "express";
import mongoose from "mongoose";
import { Dummy } from "./models/Dummy.js";


await mongoose.connect("mongodb://localhost:27017/DummyData");

const app = express()
const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))

const names = ["Abhishek", "Tom", "Lucifer"]
const salaries = [100000, 50000, 75000]
const languages = ["Java", "C", "JavaScript"]
const cities = ["New York", "Los Angeles", "British Columbia"]
const boolManager = [true, false]

app.get('/', (req, res) => {
    res.render("Interface", {})
})

app.get('/generate', (req, res) => {
    const r1 = Math.floor(Math.random() * 3)
    const r2 = Math.floor(Math.random() * 2)
    const data = new Dummy({ name: names[r1], salary: salaries[r1], language: languages[r1], city: cities[r1], isManager: boolManager[r2] });
    data.save()
    res.render("Interface", {})
})

app.get('/delete', async (req, res) => {
    await Dummy.deleteMany({})
    res.render("Interface", {})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})