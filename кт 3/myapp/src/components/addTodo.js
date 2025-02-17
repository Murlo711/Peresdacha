import React from 'react';
import { useTodoContext } from './TodoContext';
const AddTodo = () => {
    const { dispatch } = useTodoContext();
    const addTodo = () => {
        const newTodo = { id: Date.now(), text: "New Todo" };
        dispatch({ type: 'ADD_TODO', payload: newTodo });
    };

    return <button onClick={addTodo}>Add Todo</button>;
};

