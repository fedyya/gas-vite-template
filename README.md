# React + TypeScript + Vite + GAS + clasp

## 初期設定
- .claspの`scriptId`をAppScriptIDを設定する。
- ./src/server/spread.tsのSpreadIDを設定する。
``` bash
npm install
```

## 実行方法
``` bash
npm run build
clasp push
```
[AppScript](https://script.google.com/home)で作成したプロジェクトを開き、ウェブアプリとしてデプロイする。
``` bush
clasp open --webapp
```
「権限がありません」と書かれた場合、AppScriptでどの関数でもいいので実行し権限を付与してください。

## Web上で外見確認
通信はしないので、GASの操作は不可。
``` bash
npm run dev
```
