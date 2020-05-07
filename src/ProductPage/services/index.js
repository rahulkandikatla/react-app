import { create } from 'apisauce'
import { apiMethods } from '../../constants/APIConstants'
import { networkCallWithApisauce } from '../../utils/APIUtils'

class ProductService {
  api
  constructor(){
      this.api=create({ baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/' })
  }
  getProductsApi =async()=> {
    return await networkCallWithApisauce(this.api, 'v1/products/', '', apiMethods.get)
  }
}

export {ProductService}