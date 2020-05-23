import CounterStore from './CounterStore'
import CounterAppStore from './CounterAppStore'
import {TodoStore} from './TodoStore'
import TodoService from '../services/TodoService/'
import AuthStore from '../Authentication/stores/AuthStore'
import AuthService from '../Authentication/services/AuthService'
import ProductService from '../E-Commerce/services/ProductService/ProductAPI'
import ProductStore from '../E-Commerce/stores/ProductStore'
import CartStore from '../E-CommerceCart/stores/CartStore'

const counterStore = new CounterStore()
const counterAppStore = new CounterAppStore()
const todoService = new TodoService()
const todoStore = new TodoStore(todoService)
const authService = new AuthService()
const authStore = new AuthStore(authService)
const productService = new ProductService()
const productStore = new ProductStore(productService)
const cartStore=new CartStore(productStore)

export default {
   counterStore, counterAppStore, todoStore, authService, authStore, productService, productStore, cartStore
}