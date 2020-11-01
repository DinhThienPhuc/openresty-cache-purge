const axios = require('axios')

const origin_url = 'http://10.5.20.102:4869/something'
const headers = { Host: 'gamek.vn' }
const LOOP_STEPS = 500
const LOOP_STEPS_ARR = [...Array(LOOP_STEPS).keys()]

const createRandomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15)

const loadDoc = async (query) => {
  try {
    const url = origin_url + '?q=' + query
    await axios.get(url, { headers })
  } catch (error) {}
}

const createMockKeys = () => {
  LOOP_STEPS_ARR.map(async () => {
    const query = createRandomString()
    await loadDoc(query)
  })
}

createMockKeys()
