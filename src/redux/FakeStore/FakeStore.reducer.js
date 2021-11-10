import { ActionTypes } from './FakeStore.type.js';

const initialState = {
    products: []
};

export const allProductsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.ALL_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    };
};