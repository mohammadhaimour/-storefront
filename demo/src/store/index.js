import { combineReducers, createStore } from 'redux';
import cat from "./cat";
import product from "./product";

let reducers = combineReducers({
    cat: cat,
    product: product
})

const store = () => {
    return createStore(reducers);
}

export default store();