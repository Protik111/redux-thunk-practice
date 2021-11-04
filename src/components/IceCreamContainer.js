import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCream.action';

const IceCreamContainer = ({numberOfIceCream, buyIceCream}) => {
    return (
        <div>
            <h1>IceCreams Remaining : {numberOfIceCream >= 0 ? numberOfIceCream : 'Order Cannot be Negative'}</h1>
            <button onClick={buyIceCream}>Buy A Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numberOfIceCream : state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);