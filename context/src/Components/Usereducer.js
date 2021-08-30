import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = 0;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;

            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </>
    )
}

export default UseReducer;

