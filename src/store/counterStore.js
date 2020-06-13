import { observable, action, computed } from "mobx";

class CounterStore {
    @observable counter = 0;
    @observable currentTime = "";

    @observable dataInfo = {
        loading: true,
        nameData: [],
    };

    @action incrementCounter = () => {
        this.counter++;
    };

    @action decrementCounter = () => {
        this.counter--;
    };

    @action updateTime = (time) => {
        this.currentTime = time;
    };

    @action updateData = (data) => {
        this.dataInfo.nameData = data;
        this.dataInfo.loading = false;
    };

    @computed get getCounter() {
        return this.counter;
    }

    @computed get getTime() {
        return this.currentTime;
    }

    @computed get getNameList(){
        return this.dataInfo.nameData;
    }

    @computed get getLoading(){
        return this.dataInfo.loading;
    }
}

var counterStore = new CounterStore();
export default counterStore;
