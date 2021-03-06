import React from 'react';
import LoadingWrapperWithFailure from '../../components/common/LoadingWrapperWithFailure';
import {observer, inject} from 'mobx-react';
import {MobxTodosApi} from '../MobxTodosApi';

@inject('todoStore')
@observer
class LoadingPage extends React.Component{
     
    componentDidMount(){
        this.doNetworkCalls()
    }
   
    doNetworkCalls=()=>{
        this.props.todoStore.init()
        this.props.todoStore.getTodoList();
    }

    renderTodoList=observer(()=>{
        return(<MobxTodosApi/>)
    });
   render(){
       const {todoStore}=this.props;
       return(<LoadingWrapperWithFailure
           apiStatus={todoStore.getTodoListAPIStatus}
           apiError={todoStore.getTodoListAPIError}
           onRetryClick={this.doNetworkCalls}
           renderSuccessUI={this.renderTodoList}
       />)
   }
}

export default LoadingPage;