import "./TodoItem.css";
import {BsCheckLg} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";

function TodoItem(props) {
    return (
        <div className="group">
            <div className="overlap-group-wrapper" onClick={props.onComplete}>
                <div className={`overlap-group-2 ${props.completed && 'item-active'}`}>
                    <BsCheckLg/>
                </div>
            </div>
            <div className={`text-wrapper-4 ${props.completed && 'item-completed'}`}>{props.text}</div>
            <div className="gridicons-cross" onClick={props.onDelete}>
                <AiOutlineClose className={"vector"}/>
            </div>
            <img className="line" src="https://c.animaapp.com/zkYlRoLj/img/line-1-5.svg" alt=""/>
        </div>
    );
}

export {TodoItem};