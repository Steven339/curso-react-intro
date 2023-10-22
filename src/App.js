import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import './App.css';
import {CreateTodoButton} from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar el curso de intro a React', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'LALALALALA', completed: false},
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter total={20} completed={3}/>
            <TodoSearch/>
            <TodoList>
                {defaultTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text}/>
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export default App;
