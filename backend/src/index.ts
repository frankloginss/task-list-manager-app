import express from "express"
import cors from "cors"
// import path from 'path'
// import bodyParser from "body-parser"

const app = express()
// const path = require('path')

// app.use(express.static(path.join(__dirname, '/taskmgr-app/build')))
app.use(cors())
app.use(express.json())

const port = 4000

let lists: any[] = []

app.post("/save", (req, res) => {
  console.log(req.body)
  lists = req.body.lists
  return res.json({ success: true })
})

app.get("/load", (req, res) => res.json({ lists }))

app.listen(port, () =>
  console.log(`Kanban-backend server running on http://localhost:${port}!`)
)
