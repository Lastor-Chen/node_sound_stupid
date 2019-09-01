// /////////////////
// 環境宣告

// 引入自定義 files
const jobs = require('./jobs.json')
const generator = require('./generator.js')

// 引入 Express.js framework
const express = require('express')
const app = express()

// 引入 handlebars template engine
const exphbs = require('express-handlebars')
const option = {
  defaultLayout: 'main',
  extname: 'hbs',
}

app.engine('hbs', exphbs(option))
app.set('view engine', 'hbs')

// 相關 setting
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000)


// /////////////////
// 設定 route
app.get('/', (req, res) => {
  // 初始化 radio history
  jobs.results.forEach(item => {
    delete item.checked
  })

  // 初始狀態，讓 index.hbs 在 result 輸出空白
  const result = ' '

  res.render('index', { jobs: jobs.results, result })
})

app.post('/', (req, res) => {
  // 記錄當前選擇的 radio
  const checkedId = req.body.radio
  const checkedJob = {}

  jobs.results.forEach(item => {
    delete item.checked

    if (item.id === checkedId) {
      item.checked = "on"
      Object.assign(checkedJob, item)
    } 
  })

  // 產生幹話
  const result = generator(checkedJob)

  res.render('index', { jobs: jobs.results, result } )
})

// /////////////////
// 啟動 Server
app.listen(app.get('port'), () => {
  console.log(`Node.js Server with Express is running => http://localhost:${app.get('port')}`)
})
