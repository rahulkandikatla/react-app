import React from 'react';
import {observable, action} from 'mobx';


class Todo extends React.Component{
     id
     @observable title
     @observable isCompleted
    
     
     constructor(props){
      super(props)
      this.id=props.id;
      this.title=props.title;
      this.isCompleted=props.completed;
     }

     @action.bound
     onCompleteTodo(){
         this.isCompleted=!this.isCompleted;
         
     }

     @action.bound
     onUpdatedTodoTitle(updatedTodo){
         this.title=updatedTodo
     }
}

export {Todo}