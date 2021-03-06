const axios = require('axios')

const origin_url = process.env.URL_ORIGIN
const headers = { Host: process.env.HOST_ORIGIN }
const LOOP_STEPS = 80
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
