import react from "react";
import reactDom from "react-dom";
import Timer from "./Timer";
import { SavedTime } from "./SaveTime";
import "./style.css";
import { useState } from "react";
import TimeList from "./TimeList";





const MyApp = () => {
    const [savedTimeArr, setSavedTimeArr] = useState([]);
    return (
        <SavedTime.Provider value={{ savedTimeArr, setSavedTimeArr }}>
            <div>
                <Timer />
                <TimeList /> 
            </div>
        </SavedTime.Provider>


    )
}

export default MyApp;

























// import MyTimer from "./MyTimer";
/* <MyTimer /> */
