import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants";
import {observable, action} from 'mobx';
import {Todo} from '../models/Todo'


class TodoStore {
     @observable getTodoListAPIStatus
     @observable getTodoListAPIError
     @observable todos ;
     @observable selected;
    
     constructor(props){
         this.init() 
         this.todosAPIService=props
     }

     @action.bound
   setGetTodoListAPIStatus(status) {
    // assign API Status to local observable
    this.getTodoListAPIStatus = status;

  }
  @action.bound
  setTodoListAPIError(error) {
    // assign API Error to local observable
    this.getTodoListAPIError=error;
  }

  @action.bound
  setGetTodoListAPIResponse(response) {
    
    // assign API Response to local observable
    this.todoList = response.map(each=>new Todo(each));
  }




  @action.bound
  getTodoList() {
    //getTodos is API network call which returns promise based response
    const getTodosPromise = this.todosAPIService.getTodos();
    return bindPromiseWithOnSuccess(getTodosPromise)
      .to(this.setGetTodoListAPIStatus, this.setGetTodoListAPIResponse)
      .catch(this.setTodoListAPIError);
  }
     
     @action.bound
     init(){
         this.todos=[];
         this.selected='ALL';
        this.getTodoListAPIStatus=API_INITIAL;
        this.getTodoListAPIError=null;
     }

     @action.bound
     onAddTodo(newTodo){
         const id=Math.random().toString();
         const todo={
             id:id,
             title:newTodo,
             completed:false,
        }
       const object=new Todo(todo);
       this.todos.push(object)
     }
     
    @action.bound
    onRemoveTodo(id){
         this.todos=this.todos.filter((each)=>each.id!=id);
    }
}

export {TodoStore}