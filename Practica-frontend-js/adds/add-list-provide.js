import { sparrestApi } from "../SparrestApi.js";
export async function getAdds (){
    const endpoint = `${sparrestApi.endpoints.adds}?_expamd=user`


   try {
    const tweets = await sparrestApi.get(endpoint)

    
    return tweets;
    
   } catch (error) {
    throw new Error('No existen resultados')
   }
  
}