import React from  'react';
import {observer, inject} from 'mobx-react';
import {Wrapper, InputTag, DeleteButton} from './styledComponents';
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
    return this.props.todoStore.todos.map((each)=><Wrapper key={each.id}><InputTag type="checkbox" onClick={each.onCompleteTodo} checked={each.isCompleted}/> <InputTag type='text' defaultValue={each.title}  disabled={each.isCompleted} isCompleted={each.isCompleted}></InputTag><DeleteButton id={each.id} onClick={this.removeTodo}>X</DeleteButton></Wrapper>)
    }
    render(){
        return(    
        <Wrapper>
            <InputTag onKeyPress={this.onChangeHandler} type='text' placeholder='What needs to be done ?'></InputTag>
            {this.renderTodosList()}
        </Wrapper>
        )
    }
}

export {MobxTodosApi}