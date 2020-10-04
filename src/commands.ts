import Discord, { MessageEmbed } from "discord.js"
import config from "./config"

export const MENTION = new RegExp(`<@!${config.id}>|<@${config.id}>`)
export const CMNDS = {
  ping: `${config.prefix}ping`,
  pong: `${config.prefix}beep`,
  server: `${config.prefix}server`,
  embed: `${config.prefix}embed`,
  user: `${config.prefix}user-info`
}

export function handlePingCommand(message: Discord.Message) {
  message.channel.send("Pong.")
}

export function handlePongCommand(message: Discord.Message) {
  message.channel.send("Boop.")
}

export function handleServerCommand(message: Discord.Message) {
  message.channel.send(`This server's name is: ${message.guild.name}`)
}

export function handleUserCommand(message: Discord.Message) {
  message.channel.send(userNameMessage(message))
}

export function handleMentionCommand(message: Discord.Message) {
  message.reply("hey, you mentioned me !")
}

function userNameMessage(message: Discord.Message): any {
  return `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
}

export function handleEmbedCommand(message: Discord.Message) {
  const embed = new MessageEmbed()
    .setTitle("A slick little embed")
    .setColor(0xff0000)
    .setDescription("Hello, this is a slick embed!")
  message.channel.send(embed)
}
