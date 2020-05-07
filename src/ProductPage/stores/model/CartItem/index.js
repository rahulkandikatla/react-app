import { observable, action } from 'mobx';

class CartItem {
    productId;
    @observable cartItemId;
    @observable quantity;
    
    constructor(){
        this.init();
    }
    @action.bound
    init(){

    }

    @action.bound
    incrementQuantity(){
        
    }

}
export {CartItem}