import { combineReducers } from "redux";
import cakeReducer from "./cakeCounter/cakeCounter.reducer";
import iceCreamReducer from "./iceCream/iceCream.reducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducer;