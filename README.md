# Default TS Express project

Чтобы скомпилировать:

```sh
npm run build
# or
yarn build
```
Проект будет скомпилирован в папке `./dist`

---

> Чтобы запустить: 
```sh
npm run start
# or
yarn start
```
> Проект запуститься на порту `3000`

---
> Что бы запустить и указать свой порт, надо указать `port=3005`:

```sh
port=3005 npm run start
# or
port=3005 yarn start
```
---

> Код надо писать в папке ./src. Компилироватся будет всё в папку ./dist
Что того что бы поменять эти параметры нужно в `tsconfig.json` поменять `outDir` и `rootDir`

---
[Про tsconfig](https://aka.ms/tsconfig.json)

[Про tsconfig на русском](https://gist.github.com/KRostyslav/82a25c469ffa6652825d58537ac6bc22)

---