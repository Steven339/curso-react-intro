import React from "react";
import "./TodoSearch.css";


function changeHandler(event, setSearchValue) {
    console.log(event.target.value);
    setSearchValue(event.target.value);
}

function TodoSearch({searchValue, setSearchValue}) {
    return (
        <div className={"box"}>
            <div className={"rectangle"}>
                <input
                    type="text"
                    placeholder="Buscar tarea ..."
                    value={searchValue}
                    onChange={
                        (e) => changeHandler(e, setSearchValue)
                    }/>
            </div>
        </div>
    );
}

export {TodoSearch};
