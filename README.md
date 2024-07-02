# React + TypeScript + Vite + GAS + clasp

## 初期設定
- [.clasp.json](.clasp.json)の`scriptId`をAppScriptIDを設定する。
- [spread.tsx](./src/server/spread.ts)のSpreadIDを設定する。

## 実行方法
``` bash
npm run build
clasp push
```
[AppScript](https://script.google.com/home)で作成したプロジェクトを開き、ウェブアプリとしてデプロイする。
``` bush
clasp open --webapp
```

## Web上で外見確認
通信はしないので、GASの操作は不可。
``` bash
npm run dev
```