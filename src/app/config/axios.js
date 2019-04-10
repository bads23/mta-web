import axios from 'axios'
import SETTINGS from './settings'

const ApiGet = resource => {

  const FetchResource = async resource => {
    const response = await axios.get(SETTINGS`${resource}`);
    return response
  }

  return FetchResource()
}



export const ApiPost = (url, payload) => {
  const Post = async (url, payload) => {
    const response = await axios.post(url, payload)
    return response
  }
  return Post(url, payload)
}



export default ApiGet