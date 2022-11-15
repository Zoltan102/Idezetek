# Webpack keretalkalmazás

## Telepítés

* Jelentkezz be a GitHub szolgáltatásába a böngésződben és a VSCode szerkesztőben
* A böngészőben kattints a zöld "Use this template" gombra
* Az "Actions" fülön engedélyezd a github action-öket
* A Settings > Pages oldalon a Source értékét állítsd be:
  * Deploy from branch (ne a Beta legyen kiválasztva)
  * Azon belüle gh-pages-re állítsd és mentsd el (Save)
* Klónozd a **saját** repódat
* Klónozás után futtasd le az "npm install" utasítást

## Környezet

* A dist mappában található "index.html"-t szekeszd az oldal módosításához
* A JavaScript kód belépési pontja az src/index.js
* A package.json már tartalmazza a bootstrap-et, az index.js-ből importálható a hozzá tartozó JS és a CSS kód
* Fejlesztés közbeni fordításhoz használd az "npm run watch" utasítást
