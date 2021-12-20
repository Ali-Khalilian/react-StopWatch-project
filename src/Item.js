import react from "react";
import reactDom from "react-dom";
import { SavedTime } from "./SaveTime";
import { useContext } from "react";
import "./style.css";

const Item = (props)=>{
    const context = useContext(SavedTime);
    const deleteItem = (e)=>{
        context.setSavedTimeArr(context.savedTimeArr.filter(t => t!= e.target.innerHTML));
    };
    return(
        <div className="savedItem" onClick={deleteItem}>{props.children}</div>
    )
};

export default Item;