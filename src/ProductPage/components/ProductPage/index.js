import React,{Component} from 'react';
import {Wrapper, SizeFilterAndProductsList} from './styledComponents';
import {Header} from '../Header';
import {SizeFilter} from "../SizeFilter";
import {observer} from "mobx-react";
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';



@observer
class ProductPage extends Component{

    render(){
      const {getProductListAPIStatus,
        getProductListAPIError,
        productList,
        sizeFilter,
        sortBy,
        doNetworkCalls,
        renderProductList}=this.props
        return <Wrapper>
          <Header />
          <SizeFilterAndProductsList >
          <SizeFilter/>
          <LoadingWrapperWithFailure 
           apiStatus={getProductListAPIStatus}
           apiError={getProductListAPIError}
           onRetryClick={doNetworkCalls}
           renderSuccessUI={renderProductList}
       />
       </SizeFilterAndProductsList>
        </Wrapper>
    }
}

export {ProductPage}