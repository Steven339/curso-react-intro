import "./TodoCounter.css";
import React from "react";

function TodoCounter({total, completed}) {
    return (
        <div className="text-wrapper">Has completado {completed} de {total} TODOs</div>
    );
}

export {TodoCounter};
