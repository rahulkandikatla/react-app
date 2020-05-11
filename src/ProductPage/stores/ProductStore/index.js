import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL, API_FAILED, API_SUCCESS } from "@ib/api-constants";
import { observable, action, computed } from 'mobx';
import {E_COMMERCE_PRODUCTS_PATH} from '../../../ProductPage/constants';
import { ProductModel } from "../model/ProductModel";
import { SizeFilter } from "../../components/SizeFilter";


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
        this.sizeFilter=['XS','S','M','L','XL','XXL'];
        this.sortBy='SELECT';
    }

    @action.bound
    setProductListAPIResponse(apiResponse){
    
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
    
    return bindPromiseWithOnSuccess(getProductsApi)
      .to(this.setGetProductListAPIStatus, this.setProductListAPIResponse)
      .catch(this.setGetProductListAPIError);
    }

    @action.bound
    onChangeSortBy(){

    }
    
    @action.bound
    onSelectSize(e){
        const size=e.target.value;
        const {sizeFilter}=this;
     if(sizeFilter.includes(size)){
         const index=sizeFilter.indexOf(size);
         sizeFilter.pop(index);
         console.log(sizeFilter)
     }
     else{
         sizeFilter.push(size);
     }
    }

    @computed
    get products(){
        return this.datalist;
    }

    @computed
    get datalist(){
        const {productList, sizeFilter}=this;
        let data=[];
        
        //productList.values()
       // console.log(values.map(each=>each.availableSizes))
       productList.forEach(each=>{if(each.availableSizes.filter(eachSize=>sizeFilter.includes(eachSize)).length!=0){data.push(each)}}) 
       console.log(data)
        return data;
    }
}

export{ProductStore}