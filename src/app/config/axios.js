import axios from 'axios'
import SETTINGS from './settings'

const ApiGet = resource => {

  const FetchResource = async resource => {
    const response = await axios.get(SETTINGS`${resource}`);
  }

  return FetchResource()
}

export default ApiGet