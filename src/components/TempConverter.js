import React, { useReducer } from 'react';
import '../../src/App.css';

const initialState = {
    celsius: 0,
    fahrenheit: 0
};

const convertToCelsius = (state, input) => {
    return {
        ...state,
        fahrenheit: input,
        celsius: Math.round(((input - 32)) * (5 / 9))
    }
}

const convertToFahrenheit = (state, input) => {
    return {
        ...state,
        celsius: input,
        fahrenheit: Math.round((input * (9 / 5) + 32))
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CONVERT_TO_CELSIUS": return convertToCelsius(state, action.input)
        case "CONVERT_TO_FAHRENHEIT": return convertToFahrenheit(state, action.input)
    }
};

const TempConverter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { celsius, fahrenheit } = state;

    return (
        <>
            <label htmlFor="fahrenheit">Fahrenheit: </label>
            <input
                type="text"
                name="fahrenheit"
                value={fahrenheit}
                onChange={(e) => dispatch({ type: 'CONVERT_TO_CELSIUS', input: +(e.currentTarget.value) })}
            />
            <br />
            <label htmlFor="celsius">Celsius: </label>
            <input
                type="text"
                name="celsius"
                value={celsius}
                onChange={(e) => dispatch({ type: 'CONVERT_TO_FAHRENHEIT', input: +(e.currentTarget.value) })}
            />
        </>
    )

}

export default TempConverter;