import axios from 'axios'

const ApiGet = url => {

  const Get = async (url) => {
    const response = await axios.get(url)
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