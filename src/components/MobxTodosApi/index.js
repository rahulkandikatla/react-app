import React from  'react';
import {observer, inject} from 'mobx-react';
import {Wrapper, InputTag, DeleteButton,Heading,TaskWrapper} from './styledComponents';
import LoadingPage from './LoadingPage.js'

@inject('todoStore')
@observer
class MobxTodosApi extends React.Component{

    removeTodo=(event)=>{
        this.props.todoStore.onRemoveTodo(event.target.id)
    }
    onChangeHandler=(event)=>{
       if(event.charCode===13){
        this.props.todoStore.onAddTodo(event.target.value)
        event.target.value='';
       }
    }
    renderTodosList=()=>{
    return this.props.todoStore.todoList.map((each)=><TaskWrapper key={each.id}><InputTag type="checkbox" onClick={each.onCompleteTodo} checked={each.isCompleted}/> <InputTag type='text' defaultValue={each.title}  disabled={each.isCompleted} isCompleted={each.isCompleted}></InputTag><DeleteButton id={each.id} onClick={this.removeTodo}>X</DeleteButton></TaskWrapper>)
    }
    render(){
        return(    
        <Wrapper>
            <Heading>todos</Heading>
            <InputTag onKeyPress={this.onChangeHandler} type='text' placeholder='What needs to be done ?'></InputTag>
            {this.renderTodosList()}
        </Wrapper>
        )
    }
}

export {MobxTodosApi}