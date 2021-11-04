import React from 'react';
import { connect } from 'react-redux';
// import { buyCake } from '../redux';
import { buyCake } from '../redux/cakeCounter/cakeCounter.action';

const CakeContainer = ({numberOfCakes, buyCake}) => {
    return (
        <div>
            <h1>Cakes Remaining : {numberOfCakes >= 0 ? numberOfCakes : 'Order Cannot be Negative'}</h1>
            <button onClick={buyCake}>Buy A Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer);