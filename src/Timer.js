import react from "react";
import reactDom from "react-dom";
import Welcom from "./Welcom";
import "./style.css";
import { SavedTime } from "./SaveTime";

var interval;
class Timer extends react.Component {
    constructor() {
        super();
        this.state = {
            second: 0,
            minute: 0,
            hour: 0,
            isStart: false,
            timerStatus : "Hi This Is A Timer With React Js"
        };
    };

    static contextType = SavedTime;

    startTimerHandler = () => {
        this.setState({
            timerStatus : "The Timer Started..."
        });
        if (this.state.isStart == false) {
            this.setState({
                isStart: true
            });
        };
        interval = setInterval(() => {
            this.setState({
                second: this.state.second + 1
            });
            if (this.state.second == 60) {
                this.setState({
                    second: 0,
                    minute: this.state.minute + 1
                });
            };
            if (this.state.minute == 60) {
                this.setState({
                    minute: 0,
                    hour: this.state.hour + 1
                });
            };
        }, 1000);
    };

    stopTimerHandler = () => {
        this.setState({
            isStart: false,
            timerStatus : "The Timer Stopped !"
        });
        clearInterval(interval);
    };

    resetTimerHandler = () => {
        this.stopTimerHandler();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0,
            isStart: false,
            timerStatus : "Hi This Is A Timer With React Js"
        });
    };

    saveTimerHandler = () => {
        let newTime = document.querySelector(".timer").innerHTML;
        this.context.setSavedTimeArr([...this.context.savedTimeArr , newTime]);
        console.log(this.context.savedTimeArr);
    };

    render() {
        let s = this.state.second;
        let m = this.state.minute;
        let h = this.state.hour;
        return (
            <>
                <Welcom timerStatus = {this.state.timerStatus}/>
                <div className="outer">
                    <h2 className="timer">{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h2>
                </div>
                <div className="buttons">
                    <button className="startBtn" onClick={this.startTimerHandler}>Start</button>
                    <button className="stopBtn" onClick={this.stopTimerHandler}>Stop</button>
                    <button className="resetBtn" onClick={this.resetTimerHandler}>Reset</button>
                    <button className="saveBtn" onClick={this.saveTimerHandler}>Save</button>
                </div>
            </>
        )
    }
};

export default Timer;






















































// import react from "react";
// import reactDom from "react-dom";
// import { useState } from "react";

// var myInterval;

// const Timer = ()=>{

//     const [hour , setHour] = useState(0);
//     const [minute , setMinute] = useState(0);
//     const [second , setSeconds] = useState(0);
//     const [isStart , setIsStart] = useState(false);

//     const startTimerHandler = ()=>{
//         // if(isStart == false){
//         //     setIsStart(true);
//         // };
//         myInterval = setInterval(() => {
//             setSeconds(prevsecond=>prevsecond>58 ? 0 : prevsecond+1);
//             if(second>58){  

//                 setMinute(prevminute=>prevminute+1);
//             };
//             if(minute == 60){
//                 setMinute(0);
//                 setHour(currentHour => currentHour + 1);
//             };
//         }, 1000);
//     };
//     let s = second;
//     let m = minute;
//     let h = hour;
//     return(
//         <>
//         <h2>{`${h>9 ? h : "0"+h} : ${m>9 ? m : "0"+m} : ${s>9 ? s : "0"+s}`}</h2>
//         <button onClick={startTimerHandler}>Start</button>
//         </>
//     )
// };

// export default Timer;














// import react from "react";
// import reactDom from "react-dom";
// import { useState } from "react";

// var interval;
// const MyTimer = () => {
//     const [time, setTime] = useState({
//         hour: 0,
//         minute: 0,
//         second: 0,
//         isStart: false
//     });
//     const startTimerHandler = () => {
//         if (time.isStart == false) {
//             setTime({ ...time, isStart: true });
//         };
//         interval = setInterval(() => {
//             setTime(prevstate => {
//                 return { ...prevstate, second: prevstate.second > 5  ? 0 : prevstate.second+1 }
//             });
//             if (time.second >58) {
//                 setTime(prevstate => {
//                     return { ...prevstate, second: 0, minute: prevstate.minute + 1 }
//                 });
//             };
//             if (time.minute == 60) {
//                 setTime(prevstate => {
//                     return { ...prevstate, minute: 0, hour: prevstate.hour + 1 }
//                 });
//             };
//         }, 1000);
//     };

//     const stopTimerHandler = () => {
//         setTime(prevstate => {
//             return { ...prevstate, isStart: false }
//         });
//         clearInterval(interval);
//     };

//     const resetTimerHandler = () => {
//         this.stopTimerHandler();
//         setTime({
//             hour: 0,
//             minute: 0,
//             second: 0,
//             isStart: false
//         });
//     };
//     let h = time.hour;
//     let m = time.minute;
//     let s = time.second;


//     return (
//         <>
//             <div>{`${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s}`}</div>
//             <button onClick={startTimerHandler}>start</button>
//         </>
//     )

// };

// export default MyTimer;