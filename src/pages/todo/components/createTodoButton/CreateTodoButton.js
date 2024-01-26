import "./CreateTodoButton.css";

function addTodo() {
    alert("Agregando tarea");
}

export function CreateTodoButton({todos, setTodos}) {
    return (
        <button className="add-button" onClick={addTodo}>
            <div className="overlap-group">
                <div className="text-wrapper">Agregar</div>
            </div>
        </button>
    );
}
