import { createStore, applyMiddleware } from "redux";
import cakeReducer from "./cakeCounter/cakeCounter.reducer";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;