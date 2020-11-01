const axios = require('axios')

const url = 'http://10.5.22.242:8792/purge/chang-trai-sinh-nam*'
const headers = { Host: 'kenh14.vn' }

const purgeCache = async () => {
  try {
    await axios.get(url, { headers })
  } catch (error) {
    console.log(`Purge Cache: ${error}`)
  }
}

purgeCache()
