import {sparrestApi} from '../SparrestApi.js'

export const getDetail= async (id)=>{
    const add = await sparrestApi.get(`${sparrestApi.endpoints.adds}/${id}?_expand=user`)
    return add;
}

export const removeDetail = async (id) => {
    await sparrestApi.delete(`${sparrestApi.endpoints.adds}/${id}`)
    
  }
  