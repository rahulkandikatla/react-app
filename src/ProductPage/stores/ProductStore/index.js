import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL, API_FAILED, API_SUCCESS } from "@ib/api-constants";
import { observable, action, computed } from 'mobx';
import {E_COMMERCE_PRODUCTS_PATH} from '../../../ProductPage/constants';
import { ProductModel } from "../model/ProductModel";


class ProductStore {
    productsAPIService;
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable productList;
    @observable sizeFilter;
    @observable sortBy;
    
    constructor(productsAPIService){
       this.init(productsAPIService)
    }

    @action.bound
    init(productAPIService){
        this.productAPIService=productAPIService;
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.productList=new Map();
        this.sizeFilter=[];
        this.sortBy='SELECT';
    }

    @action.bound
    setProductListAPIResponse(apiResponse){
    //const data = productList()
    apiResponse.forEach(productObject=>this.productList.set(productObject.id, new ProductModel(productObject)))

}

    @action.bound
    setGetProductListAPIStatus(status){
        this.getProductListAPIStatus=status;
    }

    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error;
    }


    @action.bound
    getProducts(){
    const getProductsApi = this.productAPIService.getProductsApi();
    //console.log(getProductsApi)
    return bindPromiseWithOnSuccess(getProductsApi)
      .to(this.setGetProductListAPIStatus, this.setProductListAPIResponse)
      .catch(this.setGetProductListAPIError);
    }

    @computed
    get products(){
        return this.datalist;
    }

    @computed
    get datalist(){
        let data = [...this.productList.values()];
        return data;
    }
}

export{ProductStore}