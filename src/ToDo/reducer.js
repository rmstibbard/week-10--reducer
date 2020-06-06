import React, { useReducer } from 'react';

export const addItem = (state, { value }) => {

    return {
        ...state,
        items:
            [
                ...state.items, {
                    task: value,
                    completed: false
                }
            ],
    }
}

export const removeItem = (state, { index }) => {
    return {
        ...state,                                           // Copied from answers
        items: state.items.filter((_, i) => i !== index),   // Returns only those items whose index number is
    };                                                      // not the one passed in
};