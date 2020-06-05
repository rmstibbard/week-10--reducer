import React, { useReducer } from "react";

const initialState = { clicked: false };

let action = { type: "CLICKED" };

const reducer = (state, action) => {
    switch (action.type) {
        case "CLICKED": return {
            ...state,
            clicked: !state.clicked,
        };
        default: return state;
    }
};

const Clicked = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { clicked } = state;

    return (
        <p onClick={() => dispatch({ type: "CLICKED" })}>
            {clicked ? "Clicked" : "Not clicked"}
        </p>
    );
}

export default Clicked;