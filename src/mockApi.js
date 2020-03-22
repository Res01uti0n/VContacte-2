import mockData from "./mockData"

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchMockData = () => {
  return delay(1000).then(() => {
    return Promise.resolve(mockData)
  })
}