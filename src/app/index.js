import './styles/App.css';
import React from "react";
import { useLocalStorage } from "../hooks/localStorage";
import Todo from "../pages/todo";

const defaultTodos = [
	{ text: 'Cortar cebolla', completed: true },
	{ text: 'Tomar el curso de intro a React', completed: false },
	{ text: 'Llorar con la llorona', completed: false },
	{ text: 'LALALALALA', completed: false },
];

function App() {
	return (
		<React.Fragment>
			<Todo />
		</React.Fragment>
	);
}

export default App;
