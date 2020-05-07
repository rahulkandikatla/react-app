import { create } from 'apisauce'
import { apiMethods } from '../../../constants/APIConstants'
import { networkCallWithApisauce } from '../../../utils/APIUtils'

//from '../../utils/APIUtils/'
//'../../constants/APIConstants'
class AuthService {
  api
  constructor(){
      this.api=create({ baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/' })
  }
  signInApi=()=> {
    return networkCallWithApisauce(this.api, 'v1/signin/', '', apiMethods.get)
  }
}

export {AuthService}