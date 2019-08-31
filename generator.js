// /////////////////
// 宣告
const taskData = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phraseData = ['很簡單', '很容易', '很快', '很正常']

// Tool function
function randomNum(max) {
  return Math.floor(Math.random() * max)
}

// /////////////////
// 主函式
function generator(job) {
  // 檢測 job 內容
  if (!job.id) return '<span class="text-danger">必須選擇一個【 對象 】</span>'

  // 取出對應 job.id 的 task
  let task = taskData[job.id]

  // 隨機抽出句子
  task = task[randomNum(task.length)]
  const phrase = phraseData[randomNum(phraseData.length)]

  let result = `身為一個${job.name}，${task}，應該${phrase}吧！`
  return result
}

module.exports = generator
