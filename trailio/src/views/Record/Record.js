import React from 'react';
import firebase from '../../firebase';
import "../../App.css";
import "./Record.css";
import { useStopwatch } from "./customHooks";
import { Button } from 'react-bootstrap';

function Stopwatch() {
   const [trackingdate, setTrackingdate] = React.useState(); // Date 
 
   const {
     addLap,
     isRunning,
     elapsedTime,
     startTimer,
     stopTimer,
     resetTimer
   } = useStopwatch();
 
   const handleStartStop = () => {
     isRunning ? stopTimer() : startTimer();
   };
 
   const handleLapOrReset = () => {
     isRunning ? addLap() : resetTimer();
   };
 
   const addTrackingdate = () => {
     const db = firebase.firestore();
     db.collection('timers').add({
       date: trackingdate,
       uusiaika: elapsedTime
     });
     console.log(trackingdate);
   }

   return (
      <div className="#">
         <h1 className="heading">Tracking</h1>
         <div className="StopwatchWrapper">
           <div className="running-number">{elapsedTime}s</div>
          <div>
            <Button 
              className="button-primary"
              disabled={elapsedTime === "0.0"} 
              onClick={handleLapOrReset}>
              {isRunning ? "+Lap" : "Reset"}
            </Button>
            <Button
              className="button-primary"
              onClick={handleStartStop}
              status={isRunning ? "running" : "stopped"}
            >
              {isRunning ? "Stop" : "Start"}
            </Button>
          </div>
  
          <div className="#">
            <form>
               <input className="input-record"
                  placeholder="Add year-month-date"
                  value={trackingdate}
                  onChange={(event) => setTrackingdate(event.target.value)}
               />
            </form>
          </div>
  
          <div className="SaveTimeButton">
            <Button className="button-secondary" onClick={addTrackingdate}>Save</Button>
          </div>
          
        </div>
      </div>
    );
}

export default Stopwatch;
