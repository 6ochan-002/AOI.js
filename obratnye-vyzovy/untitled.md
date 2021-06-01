---
description: 'Действие, которое выполнится, когда пользователь будет забанен на сервере.'
---

# bot.onBanAdd

### Использование:

```javascript
bot.banAddCommand({
channel: "Айди канала, в котором убедт выполнен код",
code: `Код, который будет выполнен при бане пользователя`
})
bot.onBanAdd()
```

### Пример:

```javascript
bot.banAddCommand({
channel: "7724144498396364",
code: `$username был забанен на сервере $serverName`
})
bot.onBanAdd()
```

{% hint style="info" %}
Если у вас есть переменная, для журнала логов, используйте следующее:
{% endhint %}

```javascript
bot.banAddCommand({ 
channel: "$getServerVar[переменная]",
code: `$username забанен на сервере $serverName`
})
bot.onBanAdd()
```

