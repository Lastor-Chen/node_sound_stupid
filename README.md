# Sound-Stupid (Node.js)
To generate a phrase that make you sound stupid. <br>
It's built on Node.js with Express framework.

幹話產生器。 <br>
這是一個用 Node.js + Express 架設網站的練習專案。

#### 練習目標
* 複習 HTML/CSS 切版。
* 處理 client 端回傳的 POST 資料。
* 透過 POST 回來的資料，撰寫演算法生成特定內容。
* 具備 UX 意識，優化使用者體驗

## Preview Pages
![preview](/img/preview.jpg)

#### 功能
* User 可以自行選擇一個目標對象。
* User 可以得到一個關於被選擇目標的幹話
* User 可以回首頁，重置頁面狀態。
* User 可以從頁面上得知，此專案的相關情報。

## Usage
此專案已發布於 [Heroku](https://node-sound-stupid.herokuapp.com/)，可直接前往瀏覽 app 內容。

如欲查看更詳細的原始碼，請參考下方 [Dependency packages](#Dependency-packages) 與 [Installation](#Installation) 項目。 <br>
安裝完成後，使用以下步驟於本機端啟動專案。

1. 啟動 Node.js Server
    
    * 有安裝 nodemon，於專案根目錄執行
    ```
    $ npm run dev
    ```

    * 未安裝 nodemon，於專案根目錄執行
    ```
    $ npm run start
    ```

2. 於瀏覽器開啟網頁
    ```
    http://localhost:3000
    ```

3. 瀏覽完畢後，關閉 Node.js Server
    ```
    回到 cmd 按下 Ctrl + C
    ```

## Dependency packages
#### main
* [Node.js](https://nodejs.org/en/) v10.16.3

#### npm package
* [Express.js](https://expressjs.com/) v4.17.1
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) v3.1.0

#### other package (imported from CDN)
* [Bootstrap](https://getbootstrap.com/) v4.3.1
  * jQuery v3.4.1
  * popper v1.14.7


## Installation
這是使用 Node.js 於 localhost 架設的網站。 <br>
必須下載後於本機端執行。

#### Download Project
1. 直接於 Github 上用瀏覽器下載 ZIP file
2. 用 Git clone 專案
```
$ git clone https://github.com/Lastor-Chen/node_sound_stupid.git [資料夾名稱]
```

#### Download Node.js
本機端必須安裝 Node.js 與相關 package 才能執行此專案。 <br>
如尚未安裝 Node.js，建議使用 nvm toolkit 下載指定版本的 Node.js

| install nvm |  |
| -------- | -------- |
| nvm-windows     | [Link to](https://github.com/coreybutler/nvm-windows) |
| nvm-macOS     | [Link to](https://github.com/nvm-sh/nvm) |

#### Download dependency npm packages
已在 package.json 中登入相關訊息，可直接執行下列指定安裝所需套件。
```
$ npm install
```

#### 選擇安裝 nodemon
本專案推薦使用 [nodemon](https://github.com/remy/nodemon) 來取代原生的 Node.js 啟動方法。
```
$ npm install -g nodemon
```
