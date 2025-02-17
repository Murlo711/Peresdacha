import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
    const { state } = useTodoContext();
    return (
        <ul>
            {state.todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};