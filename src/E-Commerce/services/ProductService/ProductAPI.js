import {create} from 'apisauce'
import {URL} from '../../../Common/EnvironmentConstants/index.js'
import {productEndPoint} from '../endPoints.js'
import {networkCallWithApisauce} from '../../utils/APIUtils.js'
import {apiMethods} from '../../constants/APIConstants'

class ProductService {
    api
    constructor(){
        this.api=create({baseURL:URL.BaseURL})
    }
    
    getProductListAPI=(limit,offset)=>{   
        return networkCallWithApisauce(this.api,`?limit=${limit}&offset=${offset}`,{},apiMethods.get)
    }
}

export default ProductService