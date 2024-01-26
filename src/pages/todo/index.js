import { TodoCounter } from "./components/todoCounter/TodoCounter";
import { TodoSearch } from "./components/todoSearch/TodoSearch";
import { TodoList } from "./components/todoList/TodoList";
import { TodoItem } from "./components/todoItem/TodoItem";
import { CreateTodoButton } from "./components/createTodoButton/CreateTodoButton";
import React from "react";
import { useLocalStorage } from "../../hooks/localStorage";

function Todo() {
	const [todos, setTodos] = useLocalStorage('todo_list', defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');
	let totalTodos = todos.length;
	let completedTodos = todos.filter(todo => todo.completed).length;
	let searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
	
	function completeTodo(text, setTodos, todos) {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		setTodos(newTodos);
	}
	
	function deleteTodo(text, setTodos, todos) {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	}
	
	return (
		<div className="desktop">
			<div className="overlap-wrapper">
				<div className="overlap">
					<img className="BG" src="https://c.animaapp.com/zkYlRoLj/img/bg.svg" alt="" />
					<TodoCounter total={totalTodos} completed={completedTodos} />
					<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
					<TodoList>
						{searchedTodos.map(todo => (
							<TodoItem
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								onComplete={() => completeTodo(todo.text, setTodos, todos)}
								onDelete={() => deleteTodo(todo.text, setTodos, todos)}
							/>
						))}
					</TodoList>
					<CreateTodoButton setTodos={setTodos} todos={todos} />
					<img className="element-removebg"
					     src="https://c.animaapp.com/zkYlRoLj/img/21077233-removebg-preview-1.png" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Todo;