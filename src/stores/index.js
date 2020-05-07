import CounterStore from './CounterStore'
import CounterAppStore from './CounterAppStore'
import {TodoStore} from './TodoStore'
import TodoService from '../services/TodoService/'
import {AuthStore} from '../SignInPage/stores/AuthStore'
import {AuthService} from '../SignInPage/services/AuthService'
import {ProductService} from '../ProductPage/services'
import {ProductStore} from '../ProductPage/stores/ProductStore'

const counterStore = new CounterStore()
const counterAppStore = new CounterAppStore()
const todoService = new TodoService()
const todoStore = new TodoStore(todoService)
const authService = new AuthService()
const authStore = new AuthStore(authService)
const productService = new ProductService()
const productStore = new ProductStore(productService)

export default {
   counterStore, counterAppStore, todoStore, authService, authStore, productService, productStore
}