import CounterStore from './CounterStore'
import CounterAppStore from './CounterAppStore'
import {TodoStore} from './TodoStore'
import TodoService from '../services/TodoService/'

const counterStore = new CounterStore()
const counterAppStore = new CounterAppStore()
const todoService = new TodoService()
const todoStore = new TodoStore(todoService)

export default {
   counterStore, counterAppStore, todoStore
}