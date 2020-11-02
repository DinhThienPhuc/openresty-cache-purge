const axios = require('axios')

const url = process.env.URL_PURGE_SINGLE
const headers = { Host: process.env.HOST_PURGE_SINGLE }

const purgeCache = async () => {
  try {
    await axios.get(url, { headers })
  } catch (error) {
    console.log(`Purge Cache: ${error}`)
  }
}

purgeCache()
