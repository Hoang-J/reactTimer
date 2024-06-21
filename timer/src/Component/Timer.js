import React, { useState, useEffect } from 'react'

// making timerId global variable so that other functions can access it
// such as the stopping function
let timerId;
function Timer() {
const [time, setTime] = useState(0);


// this useEffect hook is making the timer run by increments of 1
useEffect(() => {
    function runTimer() {

        setTime(time + 1)
    }
    // setTimeout is a function that will call another function after each specified seconds
    timerId = setTimeout(runTimer, 1)

 });

// this function will stop the timer when an event is triggered
// the event to trigger is a button click
  function stopTime() {
    // clearTimeout is a function that will stop all calls of the function
    clearTimeout(timerId)
  };

// this function will restart the timer when an event is triggered
// the event to trigger is a button click
// the page will reload which will make the useEffect run again
  function restartTime() {
    window.location.reload();
  }
// these variables are for the "time" aspect of the timer
// shows the sections for milisec, sec, min, and hour on the timer
// in order to keep time in a 00:00:00:00 format we need to convert each time units to strings 
// to use the padStart method which will look at the entire string length and add 0 to the beginning if empty (no number)
  const sec = Math.floor(time / 1000);
  const min = Math.floor(sec / 60);
  const hour = Math.floor(min / 60);
  const millis = (time % 1000).toString().padStart(2, "0");
  const seconds = (sec % 60).toString().padStart(2, "0");
  const minutes = (min % 60).toString().padStart(2, "0");
  const hours = (hour % 24).toString().padStart(2, "0");

  return (
    <>
        <h2>{hours}:{minutes}:{seconds}:{millis}</h2>
        <button
        className='timer-button'
        onClick={stopTime}
        >
        Stop
        </button>

        <button
        className='timer-button'
        onClick={restartTime}
        >
        Reset
        </button>
    </>
    
  )
};

export default Timer
