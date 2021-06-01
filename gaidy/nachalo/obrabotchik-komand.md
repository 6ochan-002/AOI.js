---
description: Обработчик команд поможет вам сортировать все команды!
---

# Обработчик команд

## Основной файл index.js

Основной файл позволит вам запускать бота и сохранять команды!

```javascript
const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
 sharding: false, // true - есть шарды. false - нет шардов 
  shardAmount: 2, // Кол-во шардов 
  mobile: false, // true - Включить активность с телефона. false - Активность с ПК
  token: "TOKEN", // Токен бота
  prefix: ["PREFIX"] // Измените PREFIX на нужный
})
 
bot.onMessage() // Нужно что бы команды выполнялись
bot.loadCommands(`./commands/`) // Нужно что бы команды выполнялись из папки с командами
bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})
```

## Настройки файлов обработчика команд

{% hint style="success" %}
Создайте папку с именем "commands"
{% endhint %}

![](../../.gitbook/assets/snimok2.png)

{% hint style="success" %}
Создайте подпапку с любым названием
{% endhint %}

![](../../.gitbook/assets/snimok.png)

{% hint style="success" %}
Создайте в подпапке файл с любым названием и расширением .js
{% endhint %}

![](../../.gitbook/assets/snimok3.png)

{% hint style="success" %}
Вставьте ваш код команды в этот файл
{% endhint %}

```javascript
module.exports = ({
      name: "Название команды",
      code: `Ваш код команды`
})
```

