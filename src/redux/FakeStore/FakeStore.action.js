import { ActionTypes } from './FakeStore.type';

export const allProducts = (products) => {
    return {
        type: ActionTypes.ALL_PRODUCTS,
        payload: products
    };
};

export const selectProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    };
};