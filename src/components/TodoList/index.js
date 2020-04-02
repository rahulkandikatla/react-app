
import React from 'react';


class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classForTodoTask:"task",
            disabled:false,
        };
    }
    onCheckBoxClick=(event)=>{
        this.props.updateTodoList(event.target.id);
    }
    onUpdatingTask=(event)=>{
        this.props.updateTask(event.target.id,event.target.value)
    }
    render(){
        return <div className="todo-list-item">
        <input className="check-box" type="checkbox" onClick={this.onCheckBoxClick} id={this.props.id} defaultChecked={this.props.isChecked}></input>
        <input className={(this.props.isChecked)? "strike-through":"task"} id={this.props.id} onChange={this.onUpdatingTask}disabled={this.props.isChecked} type="text" defaultValue={this.props.task}></input>
        <button className="delete-buttons" onClick={this.props.deleteClicked} id={this.props.id}>❌</button>
        </div>
    }
}

class OperationsTodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todosListForAll:[],
            todosListForUi:[],
            countForId:0,
            footer:"footer display-none"
        };
        
    }
    createTodoList=(event)=>{
        if (event.charCode===13 && event.target.value!==""){
       let taskList=this.state.todosListForAll;
       let newCountForId=this.state.countForId;
       newCountForId++;
       taskList.push(
          {
               isChecked:false,
               content:event.target.value,
               id:this.state.countForId,
           });
        //   console.log(this.state.todosListForAll)
       this.setState({
           todosListForAll:taskList,
           footer:"footer display-flex",
           countForId:newCountForId,
       });
       setTimeout(()=>this.setState({
           todosListForUi:this.state.todosListForAll,
       }),0)
        event.target.value="";}
    }
    updateTodoList=(id)=>{
          let updateCheckStatus=this.state.todosListForAll
          for(let i=0;i<this.state.todosListForAll.length;i++)
          {
              if(updateCheckStatus[i].id==id) 
              {
                  updateCheckStatus[i].isChecked=!( updateCheckStatus[i].isChecked);
                  break;
              }
          }
          this.setState({
                todosListForAll:updateCheckStatus,
            })
    }
    updateTask=(id,value)=>{
        let updateTaskContent=this.state.todosListForAll
        for(let i=0;i<this.state.todosListForAll.length;i++)
          {
              if(updateTaskContent[i].id==id) 
              {
                  updateTaskContent[i].content=value;
                  break;
              }
          }
          this.setState({
                todosListForAll:updateTaskContent,
            })
    }
    onDelete=(event)=>{
        const id=event.target.id;
        console.log(id)
        let newListAfterDelete=this.state.todosListForAll.filter(each=>each.id!=id);
        console.log(newListAfterDelete)
        let footerStatus="footer display-flex";
        if(newListAfterDelete.length===0) footerStatus="footer display-none";
        this.setState({
            todosListForUi:newListAfterDelete,
            todosListForAll:newListAfterDelete,
            footer:footerStatus,
        });
    }
    forCompletedTasks=()=>{
        const completedList=this.state.todosListForAll.filter(each=>each.isChecked)
        this.setState({
            todosListForUi:completedList,
        })
    }
    forAllTasks=()=>{
        this.setState({
            todosListForUi:this.state.todosListForAll,
        })
    }
    removeAllCompleted=()=>{
        const listAfterRemovingFinishedTasks=this.state.todosListForAll.filter(each=>!(each.isChecked));
        this.setState({
            todosListForAll:listAfterRemovingFinishedTasks,
            todosListForUi:listAfterRemovingFinishedTasks,
        })
        
    }
    forActiveTasks=()=>{
        const activeList=this.state.todosListForAll.filter(each=>!(each.isChecked))
        this.setState({
            todosListForUi:activeList,
        })
        
    
    }
    render(){
        return(<div className="container">
      <div className="heading">todos</div>
      <div className="input-block">
        <div>
          <input className="todo" type="text" name="todo" placeholder="What needs to be done?" onKeyPress={this.createTodoList} />
          <div>{this.state.todosListForUi.map(each=>
          <TodoList 
            id={each.id} 
            key={(each.id).toString()}
            task={each.content} 
            updateTodoList={this.updateTodoList}
            class={this.state.classForTodoTask}
            deleteClicked={this.onDelete}
            isChecked={each.isChecked}
            updateTask={this.updateTask}
            />)}
           </div>
      </div>
        </div>
        <div className={this.state.footer}>
        <div className="list-status">{this.state.todosListForUi.length} items</div>
        <div className="categories">
          <button className="tab-buttons" onClick={this.forAllTasks}>All</button>
          <button className="tab-buttons" onClick={this.forActiveTasks}>Active</button>
          <button className="tab-buttons" onClick={this.forCompletedTasks}>Completed</button>
        </div>
        <button  className="clear-completed" onClick={this.removeAllCompleted}>Clear Completed</button>
        </div>
       </div>);

    }
}

export{TodoList,OperationsTodoList};
