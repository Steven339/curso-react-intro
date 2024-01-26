import "../../styles/TodoList.css";

function TodoList(props) {
	return (
		<div className="items">
			{props.children}
		</div>
	);
}

export { TodoList };

