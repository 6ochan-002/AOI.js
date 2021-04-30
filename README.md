# AOI.js

# This Package, allows you to make Discord Bot with ease!

## Are you Familiar with BDFD aka Bot Designer for Discord?

### Then you can easily transfer your code into this Package with no issues!



### Пример Использования

```js

const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "TOKEN YOUR BOT",
prefix: "PREFIX YOUR BOT"
})
bot.onMessage()
//commands(команды)

bot.command({
name: "ping", //Trigger(Триггер)
code: `$ping Pong!` //Code(Код)
})
```

## Slash Commands Support

With easy and simple functions, you can make Slash Commands with your Bots quick!

```js

bot.command({

    name: "slash",

    code: `$createSlashCommand[$guildID;version;Returns DBD.js Version]`

})

bot.interactionCommand({

    name: "version", 

    code: `$interactionReply[$packageVersion]`

})

bot.onInteractionCreate()

```



## Music Support

With our powerful Package, we incorporated Music with several functions.

We allowed customization and control, over what you want.

## Music Function Examples

```js

$playSong - $playSong[song;leave vc time;defean (yes or no);error message]

$skipSong - Skip the current song in queue.

$stopSong - Stop all songs in queue.

$loopQueue - Loop all songs in queue.

$skipTo - Skip to a song in the current queue.

```



### Using Variables

What are variables? They can be used for many things, especially allowing to save data.

Such as allowing level system, currency system and much more!

```js

bot.variables({

  Name: "Value",

  Name2: "Value2"

})

```

### Callbacks

What are callbacks?

It's simple and easy process, it essentially allows you to run events, such as user joining a Guild.

This will trigger a event, causing a code to be executed such as.

```js

bot.joinCommand({

        channel: "Channel ID", 

        code: `<@$authorID> just joined, welcome!`

})

bot.onJoined()

```

### Setting Bot Status

Add a custom message to your Bot Activity!

```js

bot.status({

  text: "TEXT",

  type: "PLAYING",

  time: 12

})

```

## Support

If you don't understand something, confused, bug reports, errors, or need assistance. Join our [Official DBD.js Support Server](https://discord.gg/ZHm9kpZndd)

