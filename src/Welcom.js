import react from "react";
import reactDom from "react-dom";
import "./style.css";

const Welcom = (props) => {
    // const [hello, setHello] = useState("Hi This Is A Timer With React Js");
    return(
        <h2 className="welcom">{props.timerStatus}</h2>
    )
};

export default Welcom;