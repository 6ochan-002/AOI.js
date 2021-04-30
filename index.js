const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "TOKEN", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
prefix: "PREFIX" //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})
bot.onMessage()
//commands(команды)

bot.command({
name: "ping", //Trigger(Триггер)
code: `$ping Pong!` //Code(Код)
})

//status(статус бота)

bot.status({
  text: "Your text!",
  type: "WATCHING",
  time: 12
})

//variables(переменные)

bot.variables({
  Name1: 'Value1',
  Name2: 'Value2'
})