// import React,{Component} from 'react';
// import {ProductPage} from '../../components/ProductPage'
// import {observer, inject} from 'mobx-react';
// import { action, observable } from "mobx";
// import {Product} from '../../components/Product'
// import {Wrapper} from './styledComponents'

// @inject('productStore')
// @observer
// class ProductRoute extends Component{
//     @observable sizeFilter=this.props.productStore.sizeFilter;
//     componentDidMount(){
//         this.doNetworkCalls()
//     }

//     @action.bound
//     doNetworkCalls(){
//         this.props.productStore.getProducts()
//     }
//     @action.bound
//     renderProductList(){
//         console.log('renderProductList')
//    return (<Wrapper>{this.props.productStore.products.map(eachProduct=><Product key={Math.random().toString()} details={eachProduct}/>)}</Wrapper>
//     )
//     }
//     //
//     render(){
//         console.log('productRoute')
//         const {  getProductListAPIStatus,
//                  getProductListAPIError,
//                  sizeFilter,
//                  sortBy,
//                  products
//         }=this.props.productStore;
//         const {
           
//             doNetworkCalls,
//             renderProductList
//         }=this
//         return <ProductPage 
//         getProductListAPIStatus={getProductListAPIStatus}
//         getProductListAPIError={getProductListAPIError}
//         productList={products}
//         sizeFilter={sizeFilter}
//         sortBy={sortBy}
//         doNetworkCalls={doNetworkCalls}
//         renderProductList={renderProductList}
//                />
//     }
// }

// export {ProductRoute}