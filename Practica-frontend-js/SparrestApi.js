export class SparrestApi {

  baseUrl = 'http://localhost:8000'
  endpoints = {
    login: '/auth/login',
    signup: '/auth/register',
    adds: '/api/tweets',
  }
  constructor() {}

  async get(endpoint) {
    
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`)


    if (!response.ok) {
      throw new Error('No existen resultados')
    }

    const data = await response.json()
   

    return data;
      
    } catch (error) {

      return error
      
    }
    


  }

  async post(endpoint, body) {
    const token = localStorage.getItem('token')
    console.log("🚀 ~ file: SparrestApi.js:25 ~ SparrestApi ~ post ~ token", token)

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
   

    const data = await response.json()
   

    return data;
  }

  async delete(endpoint) {
    const token = localStorage.getItem('token')
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await response.json()

    return data;
  }
}

export const sparrestApi = new SparrestApi()
