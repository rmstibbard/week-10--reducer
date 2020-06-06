import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initialState = {
    items: []
};

it('adds items', () => {
    let result = addItem(initialState, { value: "Hello" });

    // first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual(
        {
            task: "Hello",
            completed: false
        }
    );

    // shouldn't be the same array we started with
    expect(result.items).not.toBe(initialState.items);

    // passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });

    // should be two items
    expect(result.items.length).toBe(2);

    // check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });


});

it('removes items', () => {

    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    // remove item at index 0
    let removed = removeItem(many, { index: 0 });

    // "Hello" should be gone, so should get back "Mum" task
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });

    // should be 5 items, not 6
    expect(removed.items.length).toBe(5);

    // use the previously pruned array
    removed = removeItem(removed, { index: 2 });

    // check that the right task is now in index 2
    expect(removed.items[2]).toEqual({ task: "You", completed: false });


});

it('updates items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // update an item passing the index and value
    let updated = updateItem(many, { index: 1, value: "Dad" });

    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });


    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });

    // check that it's not the same object being returned
    expect(updated.items[1]).not.toBe(many.items[1]);

    // update the item at index 0
    updated = updateItem(many, { index: 0, value: "Good Morning" });

    // check that the completed value is the same
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });

});



/*
* tests for completing an item
*/
it('completes items', () => {
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // complete item at index 1
    let completed = completeItem(many, { index: 1 });

    // complete the item at index 1
    expect(completed.items[1]).toEqual({ task: "Mum", completed: true });

    // check that it's not the same object being returned
    expect(completed.items[1]).not.toBe(many.items[1]);

    // complete item at index 0
    completed = completeItem(many, { index: 0 });

    // should still be marked as completed
    expect(completed.items[0]).toEqual({ task: "Hello", completed: true });
});

/*
* tests for the reducer
*/
it('reduces', () => {
    /*
    * Unsupported action
    */

    // pass in a nonsense action
    let newState = reducer(initialState, { type: "GOTTA_CATCH_EM_ALL" });

    // get back initial
    expect(newState).toBe(initialState);


    /*
    * New item
    */

    // use the NEW_ITEM action, passing a value
    newState = reducer(initialState, { type: "NEW_ITEM", value: "Hello" });

    // make sure it's been added
    expect(newState.items[0]).toEqual({ task: "Hello", completed: false });


    /*
    * Remove item
    */

    // ALL JUST COPIED FROM ANSWERS - COULD NOT WRITE THIS MYSELF
    // add some more items
    newState = reducer(newState, { type: "NEW_ITEM", value: "Mum" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "How" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "Are" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "You" });

    // check they've been added
    expect(newState.items.length).toBe(5);

    // remove item at index 2
    newState = reducer(newState, { type: "REMOVE_ITEM", index: 2 });

    // check index 3 has moved down to index 2
    expect(newState.items[2]).toEqual({ task: "Are", completed: false });


    /*
    * Change item
    */

    // update item at index 1
    newState = reducer(newState, { type: "CHANGE_ITEM", index: 1, value: "Dad" });

    // check it's been changed
    expect(newState.items[1]).toEqual({ task: "Dad", completed: false });


    /*
    * Complete item
    */

    // mark index 1 as completed
    newState = reducer(newState, { type: "MARK_COMPLETED", index: 1 });

    // check it's been updated
    expect(newState.items[1]).toEqual({ task: "Dad", completed: true });
});