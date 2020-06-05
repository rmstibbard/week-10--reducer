import React, { useReducer } from "react";

const initialState = {
    counter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'countUp': return {
            ...state,
            counter: state.counter + action.step
        };

        case 'countDown': return {
            ...state,
            counter: state.counter - action.step
        };

    }
};

const StepCounter = ({ max, step }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { counter } = state;

    return (
        <>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'countUp', step: step, max: max })}>+</button>
            <button onClick={() => dispatch({ type: 'countDown', step: step })}>-</button>
        </>
    )
}

export default StepCounter;