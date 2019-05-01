import axios from 'axios'

const ApiGet = url => {

  var tokens = localStorage.getItem('tokens')
  var header = {}

  if (tokens) {
    tokens = JSON.parse(tokens)

    header = {
      Authorization: `Bearer ${tokens.access}`
    }
  }

  const Get = async (url) => {
    const response = await axios.get(url, { headers: header })
    return response
  }
  return Get(url)
}


export const ApiPost = (url, payload) => {
  const Post = async (url, payload) => {
    const response = await axios.post(url, payload)
    return response
  }
  return Post(url, payload)
}


export default ApiGet