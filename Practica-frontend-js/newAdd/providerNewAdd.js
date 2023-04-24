import { sparrestApi } from "../SparrestApi.js"

export const createApiProduct = (add) => {
  sparrestApi.post(sparrestApi.endpoints.adds, add)
}