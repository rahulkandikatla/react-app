import {computed,action,observable} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import { API_INITIAL } from "@ib/api-constants";
import Product from '../model/ProductModel'



class ProductStore{
    @observable productList 
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productAPIService
    @observable sizeFilter=[]
    @observable sortBy
    @observable offset
    @observable limit
    @observable total
    
    
    constructor(productService){
        this.init()
        this.productAPIService=productService
    }
    
    @action.bound
    init(){
        this.productList=[]
        this.sortBy="random"
        this.getProductListAPIStatus=API_INITIAL
        this.getProductListAPIError=null
        this.limit=3;
        this.offset=0;
    }
    
    
    @action.bound
    setProductListResponse(response){
    this.productList=response.products.map(each=>{
        return new Product(each)
        })
    this.total=response.total    
    }
    @action.bound
    increaseOffset(){
        console.log('incClicked')
        let {offset,limit,total}=this;
       if(offset<=total-limit){
            this.offset+=limit;
            this.getProductListAPI()
       }
    }
    
    @action.bound
    decreaseOffset(){
        console.log('decClicked')
        let {offset,limit}=this;
       if(offset>0){
             this.offset-=limit;
             this.getProductListAPI()
        } 
    }

    @action.bound
    setGetProductListAPIStatus(status){
        this.getProductListAPIStatus=status
    }
    
    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error
        //console.log('12345678906789',error)
    }
    
    @action.bound
    getProductListAPI(){
        const productsPromise=this.productAPIService.getProductListAPI(this.limit,this.offset)
        
        return bindPromiseWithOnSuccess(productsPromise)
            .to(this.setGetProductListAPIStatus,this.setProductListResponse)
                .catch(this.setGetProductListAPIError)
    }
     
    @action.bound
    onChangeSortBy(order){
        this.sortBy=order
    }
    
    @action.bound
    onSelectSize(size){
    if(!this.sizeFilter.find((each)=>each===size)){
        this.sizeFilter.push(size)}
    else{
        let index=this.sizeFilter.indexOf(size)
            this.sizeFilter.splice(index,1);
        }
    }
    
    @action.bound
    clearProductList(){
        this.productList=[];
    }
    
    @computed
    get products(){
        let filteredList
        switch(this.sortBy){
            case 'random':filteredList= this.productList; break;
            case 'ascending':filteredList=this.productList.slice().sort((a, b) => (a.price - b.price)); break;
            case 'decending':filteredList=this.productList.slice().sort((a, b) => (b.price - a.price)); break;
        }
        
        if(this.sizeFilter.length===0){
            return filteredList;
        }
        else{
            let newFilteredList=[];
                filteredList.forEach((eachProduct)=>{
                  eachProduct.availableSizes.forEach((availableSize)=>{
                     this.sizeFilter.forEach((eachSize)=>{eachSize})
                      if(this.sizeFilter.find((each)=>each===availableSize)){
                          if(!newFilteredList.find((each)=>each===eachProduct)){
                          newFilteredList.push(eachProduct)}
                      }
                  })  
                })
            return newFilteredList;
        }
    }
    
    
    @computed
    get sortAndFilterProducts(){
        return this.products;
    }
    
    @computed
    get totalNoOfProductsDisplayed(){
        return this.products.length;
    }
}

export default ProductStore;