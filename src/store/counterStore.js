import { observable, action, computed } from "mobx";

class CounterStore {
    @observable counter = 0;
    @observable currentTime = "";

    @observable dataInfo = {
        loading: true,
        nameData: [],
    };

    @observable currency={
        error:""
    }

    currencyList = [
        { currency: "XCD", name: "East Caribbean dollar", symbol: "$" },
        { currency: "EUR", name: "European euro", symbol: "€" },
        { currency: "GEL", name: "Georgian lari", symbol: "₾" },
        { currency: "HTG", name: "Haitian gourde", symbol: "G" },
        { currency: "ILS", name: "Israeli new sheqel", symbol: "₪" },
        { currency: "KZT", name: "Kazakhstani tenge", symbol: "лв" },
        { currency: "KWD", name: "Kuwaiti dinar", symbol: "د.ك" },
        { currency: "LSL", name: "Lesotho loti", symbol: "L" },
        { currency: "INR", name: "Indian rupee", symbol: "₹" },
        { currency: "USD", name: "U.S. Dollar", symbol: "$" },
    ];

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

    @action currencyError(err){
        this.currency.error=err;
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

    @computed get getError(){
        return this.currency.error;
    }

    @computed get getCurrencyList(){
        return this.currencyList;
    }
}

var counterStore = new CounterStore();
export default counterStore;
