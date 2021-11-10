import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakeCounter/cakeCounter.reducer";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const store = createStore(rootReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;