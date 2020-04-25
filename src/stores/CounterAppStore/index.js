import { observable, action } from 'mobx';

class CounterAppStore {
    @observable count=0;

    @action.bound
    incrementCount(){
        this.count++;
    }
    
    @action.bound
    decrementCount(){ 
        this.count--;
    }
}

export default CounterAppStore;