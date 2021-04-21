const express = require("express")
const app = express()
const Discord = require("discord.js")
const client = new Discord.Client();
const data = process.env
const path = require("path")

const Neko = require("neko-love");
const api = new Neko.Client();

const websiteDirectory = path.resolve(`${process.cwd()}${path.sep}index.ejs`)


app.set("view engine", "ejs");

app.get('/', async (req, res) => {
  const proie = client.users.cache.get(data.id)
  res.render(websiteDirectory, {
    avatar: proie.displayAvatarURL({ format: "gif" }),
    user: proie,
    status: proie.presence.status,
    image: await api.neko()
  })
})

client.on('ready', async () => {
  console.log(`✔ Le bot est prêt !`);
  app.listen("80", () => console.log("✔ Le site est prêt !"))
})

client.login(data.token)
