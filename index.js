const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
  sharding: false, //true or false
  shardAmount: 2, //Shard amount
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "TOKEN", //TOKEN YOUR BOT(ТОКЕН ВАШЕГО БОТА)
  prefix: ["PREFIX"] //PREFIX YOUR BOT(ПРЕФИКС ВАШЕГО БОТА)
})

bot.onMessage()
//commands

bot.command({
name: "ping", //ТРИГГЕР КОМАНДЫ(trigger)
code: `Pong! \`$ping\`` 
})

//status(статус бота)

  text: "Your text!",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "Your text!",
  type: "PLAYING",
  status: "idle",
  time: 12
})

//variables(переменные)

bot.variables({
    Name: "Value",
    Name2: "Value2"
  })