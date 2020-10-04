import config from "./config"
import wakeUpDyno from "./wokeDyno"
import express from "express"
import { client } from "./client"

function turnoff(signal): void {
  client.destroy()
}

process
  .on("SIGTERM", signal => client.destroy())
  .on("SIGINT", signal => client.destroy())
  .on("uncaughtException", signal => client.destroy())

const app = express()
const port = process.env.PORT || 3000
const DYNO_URL = "https://digma-discord.herokuapp.com" // the url of your dyno

app.get("/", (req, res) => {
  res.send("This is the Digma Discord Bot server. You should not be here!")
})

app.listen(port, () => {
  console.log(`Discord bot server listening on http://localhost:${port}`)
  wakeUpDyno(DYNO_URL) // Keep heroku alive
  client.login(config.token)
})
