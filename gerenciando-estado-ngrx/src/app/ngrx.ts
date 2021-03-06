import { createAction, createReducer, on } from '@ngrx/store';

enum ActionTypes {
    Increment = 'Increment',
    Decrement = 'Decrement'
}

export const increment = createAction(
    ActionTypes.Increment
);

export const decrement = createAction(
    ActionTypes.Decrement
);

const INITIAL_STATE = {
    counter: 0
};

export const reducer = createReducer(
    INITIAL_STATE,
    on(increment, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrement, state => ({
        ...state,
        counter: state.counter - 1
    }))
);
