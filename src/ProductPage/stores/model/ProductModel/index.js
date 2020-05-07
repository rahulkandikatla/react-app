import {action} from 'mobx'

class ProductModel {
    productId	
    availableSizes	
    currencyFormat	
    currencyId		
    description	
    installmentsCount
    isFreeShipping	
    price	
    printStyle
    title
    imageURL


    constructor(productObject){
        this.init(productObject);
    }
    @action.bound
    init(productObject)  {
        const {id,	
            availableSizes,	
            currencyFormat,	
            currencyId,		
            description,	
            installments,
            isFreeShipping,	
            price,	
            style,
            title,
            image}=productObject;
        this.productId=id;	
        this.availableSizes=availableSizes;	
        this.currencyFormat=currencyFormat;
        this.currencyId=currencyId;	
        this.description=description;	
        this.installmentsCount=installments;
        this.isFreeShipping=isFreeShipping;
        this.price=price;
        this.printStyle=style;
        this.title=title;
        this.imageURL=image;        
    }
}

export {ProductModel}