# React + TypeScript + Vite + GAS + clasp

## 初期設定
- .claspの`scriptId`を設定するAppScriptIDに設定する。
``` bash
clasp settings scriptId <Script ID>
```
- ./src/server/spread.tsを開き、SpreadIDを設定する。
- パッケージをインストールする。
``` bash
npm install
```
- 権限を付与するためにログインする
``` bash
clasp login
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
