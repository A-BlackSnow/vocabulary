import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:8888'
})

export const fetchVocabulary = (word: string) => {
  return service.get('/vocabulary', { params: { w: word } })
}
