import React from 'react'
import { action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { clearUserSession, getAccessToken } from '../../utils/StorageUtils.js'
import { withRouter, Redirect } from "react-router-dom";

//import {productStore} from '../../../Common/stores'
//import {cartStore} from '../../../Common/stores'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import NoDataView from '../../../components/common/NoDataView'
import ProductCart from '../../../E-CommerceCart/components/ProductCart'

import {SizeFilter} from '../SizeFilter'
import Header from '../Header'
import ProductList from '../ProductList'

import { SignoutButton, Page, SignoutAndSizeChart, FilterAndProducts, Cart, SignoutAndCartIcon } from './styledComponents.js'

@inject('productStore', 'cartStore')
@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }

    doNetworkCalls = () => {
        this.props.productStore.getProductListAPI()
    }

    onClickSignOut = () => {
        this.props.productStore.clearProductList()
        clearUserSession()
        this.props.history.push('/ecommerce-store/signin')
    }

    renderProductList = () => {
        const { productList } = this.props.productStore
        if (productList.length === 0) {
            return <NoDataView/>;
        }
        else {
            return <ProductList onClickAddToCart={this.props.cartStore.onClickAddToCart}
                        list={this.props.productStore}/>
        }
    }


    render() {
        const { productStore } = this.props
        return (<Page>
        <SignoutAndSizeChart>
            <SignoutAndCartIcon>
            <SignoutButton onClick={this.onClickSignOut}>signout</SignoutButton>
            </SignoutAndCartIcon>
            <SizeFilter sizeFilter={productStore.sizeFilter} onSelectSize={productStore.onSelectSize}/>
        </SignoutAndSizeChart>
        <FilterAndProducts>
            <Cart><ProductCart /></Cart>
            <Header totalNoOfProductsDisplayed={productStore.totalNoOfProductsDisplayed}  filter={productStore.onSelectSize} sortBy={productStore.onChangeSortBy}/>
            
            <LoadingWrapperWithFailure
            apiStatus={productStore.getProductListAPIStatus}
            apiError={productStore.getProductListAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderProductList}
            />
            
        </FilterAndProducts>
        </Page>)
    }
}

export default withRouter(ProductsPage)
