import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import categories from './categories';
import products from './products';
import cart from './cart';


const rootReducer = combineReducers({ categories: categories, products: products, cart: cart });

const store = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();