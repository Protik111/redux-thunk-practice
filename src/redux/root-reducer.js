import { combineReducers } from "redux";
import cakeReducer from "./cakeCounter/cakeCounter.reducer";
import iceCreamReducer from "./iceCream/iceCream.reducer";
import { allProductsReducer } from './FakeStore/FakeStore.reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    allProducts: allProductsReducer
});

export default rootReducer;