import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL, API_FAILED, API_SUCCESS } from "@ib/api-constants";
import { observable, action } from 'mobx';
import {E_COMMERCE_PRODUCTS_PATH} from '../../../ProductPage/constants';
import { setAccessToken } from "../../utils/StorageUtils";


class AuthStore {
    authAPIService;
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    
    constructor(authAPIService){
       this.init(authAPIService)
    }

    @action.bound
    init(authAPIService){
        this.authAPIService=authAPIService;
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
    }

    @action.bound
    setUserSignInAPIResponse(props){
      //  const { history } = this.props;
        setAccessToken(props[0].access_token);
           //history.push(E_COMMERCE_PRODUCTS_PATH);
       // history.push(E_COMMERCE_PRODUCTS_PATH);
    }

    @action.bound
    setGetUserSignInAPIStatus(status){
        this.getUserSignInAPIStatus=status;
    }

    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
        console.log(error)
    }

    @action.bound
    userSignOut(){}

    @action.bound
    userSignIn(){
    const getAccessToken = this.authAPIService.signInApi();
    console.log(getAccessToken)
    return bindPromiseWithOnSuccess(getAccessToken)
      .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
      .catch(this.setGetUserSignInAPIError);
    }
}

export{AuthStore}