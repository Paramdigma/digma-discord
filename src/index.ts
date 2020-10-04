import Discord from "discord.js"
import config from "./config"
import {
  CMNDS,
  MENTION,
  handlePingCommand,
  handlePongCommand,
  handleServerCommand,
  handleUserCommand,
  handleMentionCommand,
  handleEmbedCommand
} from "./commands"
import wakeUpDyno from "./wokeDyno"

const DYNO_URL = "https://digma-discord.herokuapp.com" // the url of your dyno
const client = new Discord.Client()

client.once("ready", () => {
  console.log("Ready!")
  wakeUpDyno(DYNO_URL) // Keep heroku alive
})

client.on("message", message => {
  console.log(message.content)
  if (message.content.startsWith(CMNDS.ping)) handlePingCommand(message)
  else if (message.content.startsWith(CMNDS.pong)) handlePongCommand(message)
  else if (message.content.startsWith(CMNDS.user)) handleUserCommand(message)
  else if (MENTION.test(message.content)) handleMentionCommand(message)
  else if (message.content === CMNDS.embed) handleEmbedCommand(message)
  else if (message.content.startsWith(CMNDS.server))
    handleServerCommand(message)
})

client.login(config.token)
