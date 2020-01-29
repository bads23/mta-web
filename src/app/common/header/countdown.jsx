import React, {useEffect} from 'react'

var toStr = (int) => {
    var n = int.toString()
    n = n.padStart(2,'0')
    return n
}

const counter = () => {

    var d = new Date();
    var f = new Date(2020, 1, 29, 18, 0, 0); //year,month(arrayindex),date,hours,minutes,seconds

    var diff = f.getTime() - d.getTime() 

    var timer = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24 )),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: (Math.floor(diff / 1000) % 60) 
    };

    document.getElementById('dayTimer').innerText = toStr(timer.days)
    document.getElementById('hourTimer').innerText = toStr(timer.hours)
    document.getElementById('minTimer').innerText = toStr(timer.minutes)
    document.getElementById('secTimer').innerText = toStr(timer.seconds)

}


const CountdownBar = () =>{

    useEffect(() =>{
        setInterval(() => {
            counter()
        }, 1000);
    },[])
    
    return(
        <>
            <div className="countdownBar">
                <div className="counterWrap">
                    <h2>Countdown to Launch: </h2>
                    <div id="clock">
                        <div className="timers" id="dayTimer">00</div>
                        <div className="timers" id="hourTimer">00</div>
                        <div className="timers" id="minTimer">00</div>
                        <div className="timers" id="secTimer">00</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountdownBar