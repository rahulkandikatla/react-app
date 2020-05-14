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
        this.sizeFilter=[];
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
    setSizeFilter(sizesArray,sizeFilter){
        console.log('hi')
         if(sizeFilter.length==0) return true;
         else{
             console.log(sizeFilter,123)
             sizesArray.forEach(eachSize=>{if(sizeFilter.includes(eachSize)){return true;}});
             return false
         }
    }

    @action.bound
    onSelectSize(e){
        const size=e.target.value;
        const {sizeFilter}=this;
     if(sizeFilter.includes(size)){
         const index=sizeFilter.indexOf(size);
         console.log(index,'index')
         sizeFilter.splice(index, 1);
         console.log(sizeFilter)
     }
     else{
         sizeFilter.push(size);
         console.log(sizeFilter)
     }
        }

    @computed
    get products(){
        return this.sortedAndFilteredProducts;
    }

    @computed
    get sortedAndFilteredProducts(){

        const {productList, sizeFilter, setSizeFilter,sortBy}=this;
        let data = [];
        
       productList.forEach(each=>{if(setSizeFilter(each.availableSizes,sizeFilter)){data.push(each)}}) 
       
        return data;
    }
}

export{ProductStore}