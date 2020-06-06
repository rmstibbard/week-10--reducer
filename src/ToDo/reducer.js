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

