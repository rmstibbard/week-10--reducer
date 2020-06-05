import React, { useReducer } from 'react';

export const addItem = (state, { value }) => {

    return {
        ...state,
        items: [
            {
                task: value,
                completed: false
            }
        ]
    }
}
