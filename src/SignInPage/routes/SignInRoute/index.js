import React,{Component} from 'react';

import {observer, inject} from 'mobx-react';
import {observable, action} from 'mobx';
import {SignInPage} from '../../components/SignInPage';
import {E_COMMERCE_PRODUCTS_PATH} from '../../../ProductPage/constants/';


@inject('authStore')
@observer
class SignInRoute extends Component{
    @observable username;
    @observable password;
    
    constructor(){
        super()
        this.init()
    }

    @action.bound
    init(){
       this.username='';
       this.password='';
    }

    @action.bound
    onChangeUserName(e){
         this.username=e.target.value;
    }

    @action.bound
    onChangePassword(e){
         this.password=e.target.value;
    }

    @action.bound
    onSubmit(){
        this.props.authStore.userSignIn();
        const { history } = this.props;
          history.push(E_COMMERCE_PRODUCTS_PATH);


    }

    render(){
        return <SignInPage 
                username={this.username}
                password={this.password}
                onChangeUserName={this.onChangeUserName}
                onChangePassword={this.onChangePassword}
                onSubmit={this.onSubmit}
               />
    }

    
}

export {SignInRoute}