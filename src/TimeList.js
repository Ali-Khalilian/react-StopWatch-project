import react from "react";
import reactDom from "react-dom";
import { SavedTime } from "./SaveTime";
import { useContext } from "react";
import Item from "./Item";

const TimeList = (props) => {
    const context = useContext(SavedTime);
    return (
        <div className="savedTimes">
            <Item>{context.savedTimeArr.map((c) => (
                <Item key={Math.random()}>{c}</Item>
            ))}
            </Item>
        </div>
    )
};

export default TimeList;