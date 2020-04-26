import CounterStore from './CounterStore'
import CounterAppStore from './CounterAppStore'

const counterStore = new CounterStore()
const counterAppStore = new CounterAppStore()

export default {
   counterStore, counterAppStore
}
