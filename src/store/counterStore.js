import {observable, action, computed} from 'mobx';

class CounterStore{
    @observable counter=0;
    @observable currentTime="ffff";

    @action incrementCounter=()=>{
        this.counter++;
    }

    @action decrementCounter=()=>{
        this.counter--;
    }

    @action updateTime=(time)=>{
        this.currentTime=time;
    }
    
    @computed get getCounter(){
        return this.counter;
    }

    @computed get getTime(){
        return this.currentTime;
    }
}

var counterStore=new CounterStore();
export default counterStore;