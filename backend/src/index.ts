import express from "express"
import cors from "cors"
import path from 'path'
// import bodyParser from "body-parser"

const app = express()
// const path = require('path')

app.use(express.static(path.join(__dirname, '/taskmgr-app/build')))
app.use(cors())
app.use(express.json())

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('trello-app/build'))
}

const port = 4000

let lists: any[] = []

app.post("/save", (req, res) => {
  console.log(req.body)
  lists = req.body.lists
  return res.json({ success: true })
})

app.get("/load", (req, res) => res.json({ lists }))

app.listen(port, () =>
  console.log(`Kanban backend running on http://localhost:${port}!`)
)
