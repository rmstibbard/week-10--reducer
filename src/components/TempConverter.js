import React, { useReducer } from 'react';

const initialState = {
    inputC: "",
    inputF: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CONVERT_TO_CELSIUS': return {
            ...state,
            inputC: ((state.inputF - 32) * (5 / 9)).toFixed(3)
        };

        case 'CONVERT_TO_FAHRENHEIT': return {
            ...state,
            inputF: ((state.inputC * (9 / 5)) + 32).toFixed(3)
        };

    }
};

const TempConverter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { inputF, inputC } = state;

    return (
        <>
            <label htmlFor="inputF">Fahrenheit: </label>
            <input
                type="text"
                value={inputF}
                name="inputF"
                onChange={() => dispatch({ type: 'CONVERT_TO_CELSIUS' })}
            />

            <label htmlFor="inputC">Celsius: </label>
            <input
                type="text"
                value={inputC}
                name="inputC"
                onChange={() => dispatch({ type: 'CONVERT_TO_FAHRENHEIT' })}
            />
        </>
    )

}

export default TempConverter;