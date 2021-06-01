---
description: Как установить статус боту.
---

# Статусы бота

## Как установить статус боту?

{% hint style="info" %}
Вам нужно добавить это в основной файл index.js
{% endhint %}

```javascript
bot.status({
  text: "Текст",
  type: "PLAYING",
  time: 12
})
```

{% hint style="info" %}
Для нескольких статус используйте следующее:
{% endhint %}

```javascript
bot.status({
  text: "Текст 1",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Текст 2",
  type: "WATCHING",
  time: 12
})
```

## Различные виды статусов

* PLAYING - Играет
* WATCHING - Смотрит
* LISTENING - Слушает
* STREAMING - Транслирует
* COMPETING - Сражается

{% hint style="info" %}
Если вы хотите установить тип статуса боту, используйте следующее:
{% endhint %}

```javascript
bot.status({
  text: "Текст",
  type: "PLAYING",
  status: "idle",
  time: 12
})
```

## Различные типы статусов

* idle - Неактивен
* dnd - Не беспокоить
* online - Онлайн
* invisible - Оффлайн

## Статус трансляции

{% hint style="info" %}
Если вы хотите в статусе ссылку на трансляцию, используйте следующее:
{% endhint %}

```javascript
bot.status({
text: "Текст", 
type: "STREAMING", 
url: "Ссылка"
})
```

