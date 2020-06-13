import {observable, action, computed} from 'mobx';

class CounterStore{
    @observable counter=0;

    @action incrementCounter=()=>{
        this.counter++;
    }

    @action decrementCounter=()=>{
        this.counter--;
    }
    
    @computed get getCounter(){
        return this.counter;
    }
}

var counterStore=new CounterStore();
export default counterStore;