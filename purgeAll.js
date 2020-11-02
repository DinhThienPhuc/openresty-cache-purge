const axios = require('axios')
const fs = require('fs')

const url = process.env.URL_PURGE_ALL
const headers = { Host: process.env.HOST_PURGE_ALL }
// const headers = {}

const purgeAll = async () => {
  try {
    await axios.get(url, { headers })
  } catch (error) {
    console.log(`Purge All: ${error}`)
  }
}

const parseTimeForHumanReadability = (timeInMiliSeconds) => {
  if (timeInMiliSeconds / 1000 < 1) {
    return timeInMiliSeconds + 'ms'
  }
  var seconds = parseInt(timeInMiliSeconds / 1000)
  var miliSeconds = timeInMiliSeconds % 1000
  if (seconds < 60) {
    return seconds + 's ' + miliSeconds + 'ms'
  }
  var minutes = parseInt(seconds / 60)
  seconds = seconds % 60
  return minutes + 'min ' + seconds + 's ' + miliSeconds + 'ms'
}

const calculateDiffTime = (start, end) => {
  var diffInMiliSeconds = end - start
  var timeForHumanRead = parseTimeForHumanReadability(diffInMiliSeconds)
  return timeForHumanRead
}

const test = async () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(1)
    }, 5000)
  })
}

;(async () => {
  const start = Date.now()
  // await test()
  await purgeAll()
  const end = Date.now()
  const executeTime = calculateDiffTime(start, end)
  const rowData = `${new Date()}: ${executeTime}\n`
  fs.appendFile('analysis', rowData, function (err) {
    if (err) return console.log(err)
  })
})()
