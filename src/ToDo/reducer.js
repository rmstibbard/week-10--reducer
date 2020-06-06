import React, { useReducer } from 'react';

export const addItem = (state, { value }) => {

    return {
        ...state,   // ?Keeps a copy of 'state'?
        items:
            [
                ...state.items, {   // Adds item named 'value' to 'state.items'
                    task: value,
                    completed: false
                }
            ],
    }
}

export const removeItem = (state, { index }) => {             // Copied from answers
    return {
        ...state,
        items: state.items.filter((item, i) => i !== index),   // Returns only those items whose index number is
    };                                                         // not the one passed in
};



// ALL JUST COPIED FROM ANSWERS - COULD NOT WRITE THIS MYSELF

export const updateItem = (state, { index, value }) => {        // Copied from answers
    let items = [...state.items];

    items[index] = {
        ...state.items[index],
        task: value
    };

    return {
        ...state,
        items: items,
    };
};


export const completeItem = (state, { index }) => {
    let items = [...state.items];

    items[index] = {
        ...state.items[index],
        completed: true
    };

    return {
        ...state,
        items: items,
    };
};

export default (state, action) => {
    switch (action.type) {
        case "NEW_ITEM": return addItem(state, action);
        case "REMOVE_ITEM": return removeItem(state, action);
        case "CHANGE_ITEM": return updateItem(state, action);
        case "MARK_COMPLETED": return completeItem(state, action);
        default: return state;
    }
};