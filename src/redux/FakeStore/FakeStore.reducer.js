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

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload}
        case ActionTypes.REMOVE_PRODUCTS:
            return {}
        default:
            return state
    };
};