---
title: 'Шрифты'
date: '2018-07-12'
slug: 'fonts'
description: Используемые шрифты.
keywords: шрифты, типография, google шрифты
category: Настройки
author: Pedr Browne
image: ./images/1.jpg
---

There are two fonts used in the starter. Both fonts are loaded from Google
fonts.

- Berkshire Swash [link](https://fonts.google.com/specimen/Berkshire+Swash) is
  used for the site and page titles
- Source Code Pro [link](https://fonts.google.com/specimen/Source+Code+Pro) is
  used for everything else.

To use different fonts you will need to make changes in two places.

- The fonts are loaded in the `<head>` of the site's layout: `src/html.jsx`.
- The font styles are declared in the CSSAPI config found in
  `src/components/styles/api.js`

```javascript
 font: {
    title: `Berkshire Swash, cursive`,
    default: `Source Code Pro, monospace`,
  },
```
