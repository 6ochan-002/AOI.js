---
description: Эта страница поможет начать работать вашему боту!
---

# Начало

## Установка Aoi.js <a id="install"></a>

 

```
npm i aoi.js
```

{% hint style="info" %}
Некоторые хостинги \(repl.it, vloxhost, danbothost, glitch\) сами устанавливают модуль
{% endhint %}

## Основной файл index.js

Основной файл позволит вам запускать бота и сохранять команды!

```javascript
const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false, // true - есть шарды. false - нет шардов 
  shardAmount: 2, // Количество шардов 
  mobile: false, // true - Включить активность с телефона. false - Активность с компьютера
  token: "TOKEN", // Токен бота
  prefix: ["PREFIX"] // Измените PREFIX на нужный
})
 
bot.onMessage()
 
bot.command({
  name: "ping", 
  code: `Понг! \`$ping\`` 
})
```

## package.json

Основной файл, который нужен для работы Aoi.js.

```bash
{
    "name": "MyBot",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node index.js"
    },
    "engines": {
      "node": "12.x"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "aoi.js": "^3.0.0"
    }
  }
```

{% hint style="warning" %}
Для обновления Aoi.js, измените версию в строке 15, на новую версию!
{% endhint %}

## Обычный шаблон команды

```bash
bot.command({
  name: "Название",
  code: `Ваш код/сообщение`
})
```

## Обычный код статуса

```bash
bot.status({
  text: "aoi.js",
  type: "PLAYING",
  time: 12
})
```

## Есть несколько видов статуса

* PLAYING - Играет
* WATCHING - Смотрит
* LISTENING - Слушает
* COMPETING - Сражается

{% hint style="danger" %}
Если вы используете хостинги: glitch, repl.it, danbothost, vloxhost - Не используйте "npm i aoi.js", package,json установит все сам!
{% endhint %}



