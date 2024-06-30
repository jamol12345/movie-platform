import express from "express"
import serverless from "serverless-http"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())
app.use(cors())

let db = []

app.get("/getUser", (req, res)=>{
    res.json(db)
})

app.post("/register", (req, res)=>{
    const {name, password} = req.body;
    db.push({name, password})
    console.log('Added user', {name, password})
    res.send("Added user!")
})

export const handler = serverless(app)